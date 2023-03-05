import { FunctionComponent } from "react";
import { AiFillGithub } from "react-icons/ai";
import { GiSpiderWeb } from "react-icons/gi";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="bg-dark-lighten text-white flex justify-between items-center py-3 px-4 shadow-md mt-3">
      <p className="flex gap-2">
        <span className="hidden md:block"> Milan_Sachani &copy; {year}</span>
      </p>
      <div className="flex gap-3 items-center">
        <p className="hidden md:block">Contact me: </p>
        <div className="flex gap-2">
          <a
            href="https://github.com/milan-960"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#6e5494] transition duration-300"
          >
            <AiFillGithub size={25} />
          </a>
          <a
            href="https://www.milansachani.dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition duration-300"
          >
            <GiSpiderWeb size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
