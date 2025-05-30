import { Link } from "react-router-dom";
import { VscGithubInverted } from "react-icons/vsc"
import { CgMail } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";


export const Footer = () => {

    return (

        // footer shadow-gray-400 mt-5
        <div className="flex bg-orange-400 border border-solid border-black justify-center shadow-md">
            <div className="foot-items">
                <ul className="flex  p-4 m-4">
                    <h1 className="px-4 font-semibold text-white">Created By Rohit Singh</h1>
                    <li className="px-2 xNIjm">
                        <Link to="">
                        <CgMail className="size-6 text-white"/>
                        </Link>
                    </li>
                    <li className="px-2">
                        <Link to="https://github.com/techelusive/singhrohit-coder">
                        <VscGithubInverted className="size-6 text-white"/>
                        </Link>
                    </li>
                    <li className="px-2 xNIjm">
                        <Link to="linkedin.com/in/rohitsingh1912">
                        <FaLinkedinIn className="size-6 text-white"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
