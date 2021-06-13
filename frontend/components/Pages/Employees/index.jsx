import React, { useState } from "react";
import EmployeesList from "./List";
import EmployeesUpload from "./Upload";
import "./style";
import { UploadIcon } from "components/General/Icons";
import NavEmployee from './Subpages/nav';

const Employee = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  return (
    <section className="section">
      <NavEmployee />
      <article className="e-article-content">
        <div className="smooth e-color-layer"></div>
        <span className="e-title">All&nbsp;employees</span>
        <button type="button" className="smooth-button e-clickable submit-color e-upload-button"
          onClick={() => setIsUploadOpen(true)}>
          <UploadIcon className="btn-icon" />
          Upload
        </button>

        {isUploadOpen && <EmployeesUpload handleShow={setIsUploadOpen}/>}
        <EmployeesList />

        <div className="e-htop-line"></div>
        <div className="e-hbottom-line"></div>
      </article>
    </section>
  )
}
export default Employee;
