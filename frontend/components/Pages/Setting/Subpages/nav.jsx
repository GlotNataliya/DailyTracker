import React from 'react';
import '../style';
import { Ball, Person } from "components/General/Icons";

const NavSettings = () => {
  return (
    <nav className="nav">
      <h3 className="all-names">Settings</h3>
      <span className="ball-icon" alt="ball">
        <Ball />
      </span>
      <span className="person-icon" alt="person">
        <Person />
      </span>
    </nav>
  )
}

export default NavSettings
