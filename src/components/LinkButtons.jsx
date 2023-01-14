function LinkButtons({ btnLinks, inverse }) {
  return (
    <div className={`pl-5 pr-5 flex flex-row justify-start mt-5 ${inverse ? 'md:justify-end' : ''}`}>
      <a href={btnLinks[0]} className={`hover:scale-125 duration-300 ${inverse ? 'md:ml-3 md:mr-0 mr-3' : 'mr-3'}`} target='_blank'>
        <i className="devicon-github-original text-4xl hover:text-mygreen"></i>
      </a>
      <a href={btnLinks[1]} target='_blank' className={`hover:scale-125 duration-300 ${inverse ? 'md:ml-3 md:mr-0 mr-3' : 'mr-3'}`}>
        <svg className='w-10 hover:stroke-mygreen' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </div>
  )
}

export default LinkButtons