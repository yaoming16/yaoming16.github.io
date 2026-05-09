function MainCard({ text, link }) {
  return (
    <div className="shadow-c1 hover:shadow-c2 p-2 bg-light-navy border-0 hover:scale-110 hover:lg:scale-125 duration-300 rounded-xl flex flex-col items-center">
      {link}
      <p className="w-full mb-2 text-center mt-2 truncate text-xs sm:text-sm" title={text}>{text}</p>
    </div>
  );
}

export default MainCard;
