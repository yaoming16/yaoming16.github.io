import { useTranslation } from "react-i18next";

function LinkButtons({ btnLinks, inverse }) {
  const { t } = useTranslation("global");

  return (
    <div
      className={`pl-5 pr-5 flex flex-row justify-start mt-5 ${inverse ? "md:justify-end" : ""}`}
    >
      {btnLinks[0] ? (
        <a
          href={btnLinks[0]}
          className={`hover:scale-125 duration-300 ${inverse ? "md:ml-3 md:mr-0 mr-3" : "mr-3"}`}
          target="_blank"
        >
          <svg
            fill="currentColor"
            aria-label={t("aria.githubProject")}
            role="img"
            viewBox="0 0 128 128"
            stroke="currentColor"
            className="w-9 h-9 hover:fill-mygreen fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M64 12C35.27 12 12 35.27 12 64c0 23 14.89 42.52 35.56 49.37 2.6.48 3.55-1.13 3.55-2.51 0-1.24-.05-4.52-.07-8.87-14.47 3.15-17.52-6.98-17.52-6.98-2.37-6.02-5.78-7.62-5.78-7.62-4.72-3.23.36-3.16.36-3.16 5.23.37 7.98 5.37 7.98 5.37 4.65 7.96 12.19 5.66 15.17 4.33.47-3.37 1.82-5.67 3.32-6.97-11.55-1.31-23.71-5.77-23.71-25.72 0-5.68 2.03-10.33 5.36-13.97-.54-1.32-2.32-6.61.51-13.78 0 0 4.37-1.4 14.3 5.33 4.15-1.15 8.6-1.73 13.01-1.75 4.41.02 8.86.6 13.02 1.75 9.92-6.73 14.28-5.33 14.28-5.33 2.84 7.17 1.06 12.46.52 13.78 3.34 3.64 5.35 8.29 5.35 13.97 0 19.99-12.19 24.39-23.76 25.68 1.87 1.62 3.54 4.81 3.54 9.69 0 7-.06 12.65-.06 14.37 0 1.4.93 3.02 3.57 2.5C101.14 106.5 116 86.98 116 64c0-28.73-23.27-52-52-52z" />
          </svg>
        </a>
      ) : null}
      <a
        href={btnLinks[1]}
        target="_blank"
        className={`hover:scale-125 duration-300 ${inverse ? "md:ml-3 md:mr-0 mr-3" : "mr-3"}`}
      >
        <svg
          width="32px"
          height="32px"
          aria-label={t("aria.liveProject")}
          role="img"
          className="w-10 hover:stroke-mygreen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </a>
    </div>
  );
}

export default LinkButtons;
