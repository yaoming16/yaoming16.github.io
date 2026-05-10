import eMercado from "../images/e-mercado.webp";
//import reactCalculator from "../images/ReactCalculator.webp";
//import landingPage from "../images/ProductLandingPage.webp";
import MK from "../images/MarkDownPreViewer.webp";
//import docPage from "../images/DocPage.webp";
//import drum from "../images/DrumApp.webp";
//import RQ from "../images/RandomQuoteApp.webp";
import MisCosas from "../images/MisCosasYYo.webp";
import TOPHomePage from "../images/TOPHomepage.webp";
import BattleShip from "../images/BattleShip.webp";
import ToDo from "../images/ToDo.webp";
import CasaSerena from "../images/CasaSerena.webp";
import CVApplication from "../images/CVApplication.webp";
//import AnimeMemoryGame from "../images/AnimeMemoryGame.webp";
import Characters from "../images/Characters.webp";
import DreamShop from "../images/DreamShop.webp";
import Inventory from "../images/Inventory.webp";
import LatinQuarter from "../images/LatinQuarter.webp";
import FileSpace from "../images/FileSpace.webp";

const projectsVar = {
  main: [
    {
      imgLink: Characters,
      tecnologies: ["TypeScript", "React", "TailwindCss", "Vite"],
      btnLinks: [
        "https://github.com/yaoming16/Characters",
        "https://chinese-characters-6ln.pages.dev/",
      ],
    },
    {
      imgLink: LatinQuarter,
      tecnologies: ["Node.js", "Express", "EJS", "JavaScript", "CSS", "SQL"],
      btnLinks: [
        "https://github.com/yaoming16/TOP-Members-Only",
        "https://the-latin-quarter.onrender.com/",
      ],
    },
    {
      imgLink: FileSpace,
      tecnologies: [
        "Node.js",
        "Express",
        "EJS",
        "JavaScript",
        "CSS",
        "PostgreSQL",
        "Prisma",
        "Cloudinary",
      ],
      btnLinks: [
        "https://github.com/yaoming16/TOP-File-Uploader",
        "https://file-space.onrender.com/",
      ],
    },
    {
      imgLink: MisCosas,
      tecnologies: ["JavaScript", "React", "TailwindCss"],
      btnLinks: [
        "https://github.com/yaoming16/Mis-cosas-y-yo/",
        "https://yaoming16.github.io/Mis-cosas-y-yo/",
      ],
    },
    {
      imgLink: DreamShop,
      tecnologies: ["React", "JSX", "JavaScript", "CSS", "Vite", "API"],
      btnLinks: [
        "https://github.com/yaoming16/TOP-Shopping-Cart",
        "https://top-shopping-cart-dg9.pages.dev/",
      ],
    },
  ],
  TOP: [
    {
      imgLink: TOPHomePage,
      tecnologies: ["HTML", "CSS", "JavaScript", "WebPack"],
      btnLinks: [
        "https://github.com/yaoming16/TOP-Homepage",
        "https://yaoming16.github.io/TOP-Homepage/",
      ],
    },
    {
      imgLink: Inventory,
      tecnologies: ["Node.js", "Express", "EJS", "JavaScript", "CSS", "SQL"],
      btnLinks: [
        "https://github.com/yaoming16/TOP-Inventory-Application",
        "https://top-inventory-application-cbxf.onrender.com/",
      ],
    },
    {
      imgLink: BattleShip,
      tecnologies: ["HTML", "CSS", "JavaScript", "WebPack"],
      btnLinks: [
        "https://github.com/yaoming16/TOP-Battleship",
        "https://yaoming16.github.io/TOP-Battleship/",
      ],
    },
    /*{
      title: "Anime Memory Game",
      text: `A memory card game built with React that challenges players to click on different anime characters without repeating any selection. The game fetches real anime data from the Jikan API and tests your memory skills.`,
      imgLink: AnimeMemoryGame,
      tecnologies: ["React", "CSS", "JavaScript", "Vite", "API"],
      btnLinks: [
        "https://github.com/yaoming16/TOP-Memory-Card",
        "https://top-memory-card-12r.pages.dev/",
      ],
    },*/
    {
      tecnologies: ["React", "Vite", "CSS"],
      btnLinks: [
        "https://github.com/yaoming16/TOP-CV-Application",
        "https://top-cv-application-919.pages.dev/",
      ],
      imgLink: CVApplication,
    },
  ],
  other: [
    {
      imgLink: ToDo,
      tecnologies: ["HTML", "CSS", "JavaScript", "WebPack"],
      btnLinks: [
        "https://github.com/yaoming16/TOP-Todo-List",
        "https://yaoming16.github.io/TOP-Todo-List/",
      ],
    },
    {
      imgLink: eMercado,
      tecnologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
      btnLinks: [
        "https://github.com/yaoming16/e_mercado_JaP",
        "https://yaoming16.github.io/e_mercado_JaP/index.html",
      ],
    },
    {
      imgLink: CasaSerena,
      tecnologies: ["HTML", "CSS", "JavaScript", "WebPack"],
      btnLinks: [
        "https://github.com/yaoming16/Top-Restaurant-Page",
        "https://yaoming16.github.io/Top-Restaurant-Page/",
      ],
    },
    /*{
      title: "React Calculator",
      text: `This calculator lets you make all the basic operations. When you make an input it checks that is a valid one
        before showing it on the screen. If the input is invalid it won´t show. An example of an invalid input is adding a "." after 5.0 because you would get 5.0. which makes no sense.`,
      imgLink: reactCalculator,
      tecnologies: ["React", "Bootstrap"],
      btnLinks: [
        "https://github.com/yaoming16/React-calculator",
        "https://yaoming16.github.io/React-calculator/",
      ],
    },*/
    {
      imgLink: MK,
      tecnologies: ["JavaScript", "React", "TailwindCss"],
      btnLinks: [
        "https://github.com/yaoming16/MarkDown-Previwer",
        "https://yaoming16.github.io/MarkDown-Previwer/",
      ],
    },
    /*{
      title: "Magical Violins",
      text: `This is a product landing page made to sell violins from an imaginary bussiness called Magical Violins`,
      imgLink: landingPage,
      tecnologies: ["HTML", "CSS"],
      btnLinks: [
        "https://github.com/yaoming16/Product-Landing-Page--Project",
        "https://yaoming16.github.io/Product-Landing-Page--Project/",
      ],
    },*/
    /*{
      title: "Technical Documentation Page",
      text: `This page contains technical documentation about javaScript. This page was made for a FreeCodeCamp project, that is why the information on the page
      comes directly from the example that was shown in the project requirements`,
      imgLink: docPage,
      tecnologies: ["HTML", "CSS"],
      btnLinks: [
        "https://github.com/yaoming16/Technical-Documentation-Page",
        "https://yaoming16.github.io/Technical-Documentation-Page/",
      ],
    },*/
    /*{
      title: "Random Quote Machine",
      text: `This simple app gives you a random quote every time that you click the 'New Quote' button. You can also tweet your quote if you wish. 
      Note that the quotes come from API that is not mine`,
      imgLink: RQ,
      tecnologies: ["JavaScript", "Jquery", "Bootstrap"],
      btnLinks: [
        "https://github.com/yaoming16/Random-quote-machine",
        "https://yaoming16.github.io/Random-quote-machine/",
      ],
    },*/
    /*{
      title: 'React Drum app',
      text: `This app lets you play different drum sounds when you click on the buttons on screen or use the keyboard keys`,
      imgLink: drum,
      tecnologies: ['React', 'TailwindCss'],
      btnLinks: ['https://github.com/yaoming16/Drum-React-app', 'https://yaoming16.github.io/Drum-React-app/']
    },*/
  ],
};

export default projectsVar;
