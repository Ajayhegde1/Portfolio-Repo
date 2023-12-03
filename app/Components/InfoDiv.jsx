import "@fortawesome/fontawesome-free/css/all.min.css";
export function InfoDiv() {
  return (
    <section className="h-screen w-screen ">
      <div className="navbar  md:flex items-center justify-between mt-[0px] 2xl:mt-[0px]  z-50 w-screen fixed">
        <div className="flex items-center gap-[6px]">
          <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
            {/* <img src={gmailIcon} alt="" className="w-[18px]" /> */}
          </div>
          {/* <div>muhammadrizwanse23@gmail.com</div> */}
        </div>
        <ul className="flex 2xl:text-[20px]">
          <li
            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
            // onClick={() => scrollTo("about")}
          >
            About me
          </li>
          <li
            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
            // onClick={() => scrollTo("skills")}
          >
            Skills
          </li>
          <li
            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
            // onClick={() => scrollTo("work")}
          >
            Work
          </li>
          <li
            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
            // onClick={() => scrollTo("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </section>
  );
}
