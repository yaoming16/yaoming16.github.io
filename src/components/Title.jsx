function Title({ text }) {
  return (
    <div className="relative flex flex-row items-center justify-center mb-24">
      <h2 className="z-20 bg-navy text-center text-[max(26px,5vw)] md:text-4xl font-bold">
        {text}
      </h2>
      <div className="h-[1px] bg-mygreen w-full line z-10 absolute  top-1/2"></div>
    </div>
  )
}

export default Title;