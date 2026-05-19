import { useTranslation, Trans } from "react-i18next";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import MainNavbar from "./components/MainNavbar";

import "./App.css";
import "animate.css/animate.css";

function App() {
  const { lang } = useParams();
  const { t, i18n } = useTranslation("global");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-navy">
      <header>
        <MainNavbar />
      </header>
      <div className="p-5 sm:p-10">

        <main className="md:max-w-[95%] lg:max-w-[75%]  ml-auto mr-auto">
          <Outlet />
        </main>

        <footer className="">
          <div className="text-center flex flex-col flex-end">
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
            <p className="md:text-lg mt-2">{t("global:footer.p2")}</p>
            <p className="md:text-lg mt-2">{t("global:footer.p3")}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
