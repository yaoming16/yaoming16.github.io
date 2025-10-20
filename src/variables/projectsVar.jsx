import eMercado from '../images/e-mercado.png'
import reactCalculator from '../images/ReactCalculator.png'
import landingPage from '../images/ProductLandingPage.png'
import MK from '../images/MarkDownPreViewer.png'
import docPage from '../images/DocPage.png'
import drum from '../images/DrumApp.png'
import RQ from '../images/RandomQuoteApp.png'
import MisCosas from '../images/MisCosasYYo.png'

let projecstVar = {
  main: [
    {
      title: 'Mis cosas y yo',
      text: `This page was created as a way to keep track, rank and share with the world the things related to entertainment that I like. For example books, videogames and music.`,
      imgLink: MisCosas,
      tecnologies: ['JavaScript', 'React', 'TailwindCss'],
      btnLinks: ['https://github.com/yaoming16/MisCosas-y-yo', 'https://yaoming16.github.io/MisCosas-y-yo/']
    },
    {
      title: 'E-commerce Page',
      text: `This E-commerce Page was made as the final project to complete the web development course of "Jovenes a Programar".
         The page receives Json files from a simulated server and displays it on screen. Also, it has different functions like adding comments to the products, completing your personal profile and buying items between others.
         To start using it you just need to log in (complete with any email and password in the log in page)`,
      imgLink: eMercado,
      tecnologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      btnLinks: ['https://github.com/yaoming16/e_mercado_JaP', 'https://yaoming16.github.io/e_mercado_JaP/index.html']
    },
    {
      title: 'React Calculator',
      text: `This calculator lets you make all the basic operations. When you make an input it checks that is a valid one
        before showing it on the screen. If the input is invalid it won´t show. An example of an invalid input is adding a "." after 5.0 because you would get 5.0. which makes no sense.`,
      imgLink: reactCalculator,
      tecnologies: ['React', 'Bootstrap'],
      btnLinks: ['https://github.com/yaoming16/React-calculator', 'https://yaoming16.github.io/React-calculator/']
    },
    {
      title: 'Markdown Previewer',
      text: `This is a Markdown previewer. You just need to write the Markdown in the box at the top and it will show in the box below.
         You can expand both boxes with the buttons at the top-right corner of each one`,
      imgLink: MK,
      tecnologies: ['JavaScript', 'React', 'TailwindCss'],
      btnLinks: ['https://github.com/yaoming16/MarkDown-Previwer', 'https://yaoming16.github.io/MarkDown-Previwer/']
    },
  ],
  other: [
    {
      title: 'Magical Violins',
      text: `This is a product landing page made to sell violins from an imaginary bussiness called Magical Violins`,
      imgLink: landingPage,
      tecnologies: ['HTML', 'CSS'],
      btnLinks: ['https://github.com/yaoming16/Product-Landing-Page--Project', 'https://yaoming16.github.io/Product-Landing-Page--Project/']
    },
    {
      title: 'Technical Documentation Page',
      text: `This page contains technical documentation about javaScript. This page was made for a FreeCodeCamp project, that is why the information on the page
      comes directly from the example that was shown in the project requirements`,
      imgLink: docPage,
      tecnologies: ['HTML', 'CSS'],
      btnLinks: ['https://github.com/yaoming16/Technical-Documentation-Page', 'https://yaoming16.github.io/Technical-Documentation-Page/']
    },
    {
      title: 'Random Quote Machine',
      text: `This simple app gives you a random quote every time that you click the 'New Quote' button. You can also tweet your quote if you wish. 
      Note that the quotes come from API that is not mine`,
      imgLink: RQ,
      tecnologies: ['JavaScript', 'Jquery', 'Bootstrap'],
      btnLinks: ['https://github.com/yaoming16/Random-quote-machine', 'https://yaoming16.github.io/Random-quote-machine/']
    },
    /*{
      title: 'React Drum app',
      text: `This app lets you play different drum sounds when you click on the buttons on screen or use the keyboard keys`,
      imgLink: drum,
      tecnologies: ['React', 'TailwindCss'],
      btnLinks: ['https://github.com/yaoming16/Drum-React-app', 'https://yaoming16.github.io/Drum-React-app/']
    },*/
  ]
}

export default projecstVar