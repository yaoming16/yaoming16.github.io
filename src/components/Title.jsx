function Title({ text, id }) {
  return (
    <div className="relative flex flex-row items-center justify-center mt-24 mb-24">
      <h2
        id={id}
        className="z-20 bg-navy text-center text-[max(26px,5vw)] md:text-4xl font-bold px-4"
      >
        {text}
      </h2>
      <div className="h-[1px] bg-mygreen w-full line z-10 absolute  top-1/2"></div>
    </div>
  );
}

export default Title;
