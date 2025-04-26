//Icons imports:
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
export const SocialBtn = (props) => {
  const { platforms } = props;
  const btnStyles = {
    facebook: {
      color: "bg-blue-800 hover:bg-blue-500",
      title: "Facebook login",
      link: "https://www.facebook.com",
      icon: <FaFacebookF />,
    },
    google: {
      color: "bg-red-500 hover:bg-red-700",
      title: "Google login",
      link: "https://www.google.com",
      icon: <FaGoogle />,
    },
    twitter: {
      color: "bg-sky-500 hover:bg-sky-600",
      title: "X login",
      link: "https://www.x.com",
      icon: <FaXTwitter />,
    },
    linkedin: {
      color: "bg-blue-900 hover:bg-blue-700",
      title: "LinkedIn login",
      link: "https://www.linkedin.com",
      icon: <FaLinkedin />,
    },
    github: {
      color: "bg-black hover:bg-gray-700",
      title: "Github login",
      link: "https://www.github.com",
      icon: <FaGithub />,
    },
    microsoft: {
      color: "bg-green-700 hover:bg-green-900",
      title: "Microsoft login",
      link: "https://www.microsoft.com",
      icon: <FaMicrosoft />,
    },
  };
  return (
    <>
      <div className="flex flex-row justify-center gap-2">
        {platforms.map((platform, index) => {
          let platformName = platform.toLowerCase();
          let platformData = btnStyles[platformName];
          if (!platformData) {
            return null;
          }
          const { link, title, color, icon } = platformData;
          return (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = link;
              }}
              title={title}
              className={`${color} rounded-full shadow-lg p-2 cursor-pointer`}
            >
              <div className="text-white text-xl">{icon}</div>
            </button>
          );
        })}
      </div>
    </>
  );
};
