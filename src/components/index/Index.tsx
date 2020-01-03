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
    }
    .lozad {
      background-blend-mode: color-burn;
      background: wheat;
      width: 90%;
    }

    @media (min-width: 920px) {
      #index {
        flex-flow: row nowrap;
      }
    }
  `}</style>
);
const Index = () => {
  useLozad("");
  return (
    <>
      <div id="index">
        <div>
          <img data-src="/images/people.svg" className="lozad" alt="people" />
        </div>
        <div>two</div>
      </div>
      {style}
    </>
  );
};

export default Index;
