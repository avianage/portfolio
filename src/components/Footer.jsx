import React from "react";
import { socialMediaLinks } from "../constants"; // Adjust path if necessary

const Footer = () => {
  return (
    <div className="grid grid-cols-5 px-6 py-4 text-sm text-white bg-gray-900">
      {/* Empty partitions */}
      <div></div> {/* 1st partition */}
      <div className="flex items-center justify-center"> {/* 2nd partition */}
        {/* Social Media Icons */}
        {socialMediaLinks.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:opacity-75"
          >
            <img
              src={social.icon}
              alt={social.id}
              className="w-6 h-6" // Adjust size as needed
            />
          </a>
        ))}
      </div>
      <div></div> {/* 3rd partition */}
      <div className="flex flex-col items-center justify-center text-center"> {/* 4th partition */}
        <p>© 2024 Aakash A. Joshi</p>
        <p>
            All rights reserved.
        </p>
      </div>
      <div></div> {/* 5th partition */}
    </div>
  );
};

export default Footer;
