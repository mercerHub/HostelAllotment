import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaHotel } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";

function NavItems({ content, goto, type }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 780); // Adjust this threshold as needed
  };

  // Add event listener for screen size changes
  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  let iconElement = <MdHomeFilled />;
  let iconSizeClass = "text-4xl"; 

  if (type === "hostel") {
    iconElement = <FaHotel />;
  } else if (type === "about") {
    iconElement = <FaQuestion />;
  } else if (type === "contact") {
    iconElement = <IoMdContact />;
  }

  return (
    <NavLink
      className={({ isActive }) =>
        `p-2 font-serif text-lg border-2 px-5 rounded-lg font-medium hover:bg-stone-300 hover:text-stone-800 transition ease-in-out flex items-center gap-2 ${
          isActive ? "bg-stone-300" : ""
        }`
      }
      to={goto}
    >
      <div className={`flex min-w-10 items-center gap-4 ${isSmallScreen ? iconSizeClass : ""}`}>{iconElement} {!isSmallScreen && content}</div>
    </NavLink>
  );
}

export default NavItems;
