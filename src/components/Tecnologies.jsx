import Title from "./Title";
import MainCard from "./HPComponents/MainCard";
import iconsVar from "../variables/iconsVar";
import FadeAnimation from "./FadeAnimation";
import { useTranslation } from "react-i18next";

function Tecnologies() {
  const [t] = useTranslation("global");

  return (
    <>
      <FadeAnimation title={true}>
        <Title text={t("tech.title")} id="technologies-heading" />
      </FadeAnimation>
      <FadeAnimation>
        <div
          className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-5 ml-auto mr-auto px-4 md:px-8`}
        >
          {iconsVar.map((item) => {
            return <MainCard text={item[1]} link={item[0]} key={item[1]} />;
          })}
        </div>
      </FadeAnimation>
    </>
  );
}

export default Tecnologies;
