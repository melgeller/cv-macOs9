import React, { useEffect } from "react";
import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className='navbar'>
      <div className='list'>
        <ul>
          <li>
            <img src='../apple.png' alt='' />
          </li>
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Navigate</li>
          <li>Tool</li>
          <li>Window</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="list2">
        <ul>
          <li>
            {clockState}
          </li>
          <li>
          <img src="../finder.png" alt=""/>
            Finder
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
