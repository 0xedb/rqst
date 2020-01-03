import { useLozad } from "../../hooks/lozad";

const style = (
  <style jsx>{`
    #index {
      position: relative;
      height: calc(100% - 50px);
      margin-top: 50px;
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
    }
    .lozad {
      mix-blend-mode: multiply;
      width: 90%;
    }

    .background {
      margin: 3%;
      display: flex;
      justify-content: center;
    }

    @media (min-width: 920px) {
      #index {
        flex-flow: row nowrap;
        justify-content: unset;
      }
    }
  `}</style>
);
const Index = () => {
  useLozad("");
  return (
    <>
      <div id="index">
        <div className="background">
          <img data-src="/images/people.svg" className="lozad" alt="people" />
        </div>
        <div>two</div>
      </div>
      {style}
    </>
  );
};

export default Index;
