import {useLocation} from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation("global");
  const location = useLocation();
  
  return (
    <footer className="mt-auto p-2 sm:p-4">
      <div className="text-center flex flex-col flex-end">
        {!location.pathname.includes("/blog") ? (
          <p className="md:text-lg">
            <Trans
              i18nKey="global:footer.p1"
              components={[
                <a
                  href="https://brittanychiang.com/"
                  target="_blank"
                  className="link"
                />,
              ]}
            />
          </p>
        ) : null}
        <p className="md:text-lg mt-2">{t("global:footer.p2")}</p>
        <p className="md:text-lg mt-2">{t("global:footer.p3")}</p>
      </div>
    </footer>
  )
}

export default Footer;