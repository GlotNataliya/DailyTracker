import React from 'react';
import '../style';
import { Ball, Person } from "components/General/Icons";

const NavEmployee = () => {
  return (
    <nav className="nav">
      <h3 className="all-names">All Employees</h3>
      <span className="ball-icon" alt="ball">
        <Ball />
      </span>
      <span className="person-icon" alt="person">
        <Person />
      </span>
    </nav>
  )
}

export default NavEmployee