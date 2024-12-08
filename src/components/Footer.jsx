import React from "react";
import { socialMediaLinks } from "../constants"; // Adjust path if necessary

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 text-sm text-white bg-gray-900 gap-x-4">
      <div className="flex space-x-4">
        {socialMediaLinks.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-300 hover:opacity-75"
          >
            <img
              src={social.icon}
              alt={social.id}
              className="object-contain w-6 h-6" // Ensure icons retain aspect ratio
              loading="lazy" // Optimized loading
            />
          </a>
        ))}
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="mb-1 whitespace-nowrap">© 2024 Aakash A. Joshi.</p>
        <p className="whitespace-nowrap"> All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
