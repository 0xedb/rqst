const PdfPrinter = require("pdfmake");
const fs = require("fs");
const path = require("path");
const os = require("os");

var fonts = {
  Roboto: {
    normal: path.join(__dirname, "..", "..", "static/fonts/roboto_regular.ttf"),
    bold: path.join(__dirname, "..", "..", "static/fonts/roboto_bold.ttf"),
    italics: path.join(__dirname, "..", "..", "static/fonts/roboto_italic.ttf"),
    bolditalics: path.join(
      __dirname,
      "../../static/fonts/roboto_bolditalic.ttf"
    )
  }
};

const makePDF = async ({ fullName, budget, amount, purpose, org }) => {
  const date = new Date().toLocaleString().split(",");

  const docDefinition = {
    info: {
      title: "Fund Request",
      author: "Rqst App",
      keywords: "ASC",
      creator: "Rqst App"
    },
    content: [
      {
        text: "Fund Request",
        bold: true,
        alignment: "center",
        margin: [0, 160, 0, 80],
        fontSize: 25
      },
      {
        text: `${date[0]}`,
        bold: true,
        alignment: "left",
        fontSize: 18
      },
      {
        text: `${date[1]}`,
        bold: true,
        alignment: "left",
        fontSize: 18
      },
      {
        text: `${fullName}`,
        alignment: "left",
        fontSize: 18
      },
      {
        text: `${budget}`,
        alignment: "left",
        fontSize: 18
      },
      {
        text: `${amount}`,
        alignment: "left",
        fontSize: 18
      },

      {
        text: `${org}`,
        alignment: "left",
        fontSize: 18
      },
      {
        stack: [
          {
            text: `${purpose}`,
            alignment: "left",
            fontSize: 18,
            margin: [0, 60, 0, 0]
          }
        ]
      }
    ]
  };

  const printer = new PdfPrinter(fonts);
  let pdfDoc = printer.createPdfKitDocument(docDefinition);
  const file = path.join(
    os.tmpdir(),
    `__document_${date[1]}_${fullName.split(" ")[0]}`
  );
  pdfDoc.pipe(fs.createWriteStream(file));
  pdfDoc.end();
  return file;
};

module.exports = makePDF;
