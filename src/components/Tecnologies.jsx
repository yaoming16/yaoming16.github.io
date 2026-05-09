import Title from "./Title";
import MainCard from "./MainCard";
import iconsVar from "../variables/iconsVar";

function Tecnologies() {
  return (
    <>
      <Title text="I Work With:" />

      <div
        className={`grid grid-auto-fit-[100px] md:grid-auto-fit-[125px] gap-3 sm:gap-5 ml-auto mr-auto`}
      >
        {iconsVar.map((item) => {
          return <MainCard text={item[1]} link={item[0]} key={item[1]} />;
        })}
      </div>
    </>
  );
}

export default Tecnologies;
