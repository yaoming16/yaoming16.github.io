import { v4 as uuidv4 } from 'uuid';
import LinkButtons from './LinkButtons';

function ProjectCard({ title, imgLink, text, tecnologies, btnLinks, inverse, shadow }) {
  return (
    <div
      className={`
    ${shadow ? 'shadow-3xl hover:shadow-4xl duration-300 md:shadow-none hover:md:shadow-none' : ''}
    ml-auto mr-auto z-20 max-w-[1150px] rounded-lg`}>
      <div className={`ml-auto mr-auto relative items-center md:flex  ${inverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className={`p-2 sm:p-5 md:p-0 relative  z-30 md:w-1/2 w-full flex flex-col justify-around
        ${inverse ? 'lg:right-[5%] md:right-[8.5%] md:text-right' : 'lg:left-[5%] md:left-[8.5%]'} md:text-left`}>
          <div className='ml-5 mr-5 mb-5'>
            <a
              href={btnLinks[1]}
              target='_blank'
              className='hover:text-mygreen duration-500 font-bold text-2xl text-lightest-slate'>{title}</a>
          </div>
          <div className='md:bg-light-navy rounded-lg p-5  md:shadow-c1 hover:md:shadow-c2 duration-300'>{text}</div>
          <div className={`flex flex-col sm:flex-row  mt-3 italic font-semibold pr-5 pl-5
            justify-starts ${inverse ? 'md:justify-end' : 'justify-start'}`}>
            {
              tecnologies.map((item) => {
                return <p className={`${tecnologies.indexOf(item) !== 0 ? 'sm:ml-3' : ''} text-mydarkgreen`} key={uuidv4()}>{item}</p>
              })
            }
          </div>
          <LinkButtons btnLinks={btnLinks} inverse={inverse} />
        </div>
        <div className={`md:shadow-c1 hover:shadow-c2 duration-300 absolute top-0  w-full h-full md:relative z-10 md:w-1/2 hover:cursor-pointer
        ${inverse ? 'lg:left-[5%] md:left-[8.5%]' : 'lg:right-[5%] md:right-[8.5%]'}`}>
          <div className='w-full h-full opacity-10 md:opacity-70 hover:opacity-100 md:transition md:duration-500 bg-mygreen rounded-lg'>
            <a href={btnLinks[1]} target="_blank">
              <img src={imgLink}
                alt={`${title} image`}
                className="w-full h-full object-cover rounded-lg opacity-50 hover:opacity-100 md:transition md:duration-500" />
            </a>
          </div>
        </div>
      </div>


    </div>
  )
}

export default ProjectCard

