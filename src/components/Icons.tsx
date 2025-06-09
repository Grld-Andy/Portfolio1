import { SlSocialLinkedin } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { IoLogoFigma } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Icons() {
  const icons = [
    { name: "LinkedIn", icon: <SlSocialLinkedin /> },
    { name: "Twitter", icon: <FaTwitter /> },
    { name: "Instagram", icon: <LuInstagram /> },
    { name: "Figma", icon: <IoLogoFigma /> },
  ];

  return (
    <>
      <div className="flex gap-2 rounded-[8px] w-fit">
        {icons.map((item, index) => (
          <div
            key={index}
            title={item.name}
            className="text-white text-2xl border-[0.5px] border-white rounded-md p-1 items-center flex"
          >
            {item.icon}
          </div>
        ))}
        <button className="flex items-center gap-2 border border-white rounded-md p-2 text-white">
          <MdOutlineFileDownload />
          Resume
        </button>
      </div>
    </>
  );
}
