import React from 'react';
import { DullCircle, DimPlus } from "components/General/Icons";
import ModalButtons from 'components/General/Modal/ButtonsBox';
import PropTypes from 'prop-types';

const ModalWindow = ({ show, newTeam, handleModalClose, handleModalOpen, handleModalChange, handleModalSubmit }) => {
  return (
    <>
      <div className="t-dullcircle-icon" alt="dull_circle">
        <DullCircle />
      </div>
      <div className="t-dimplus-icon" alt="dim_plus" onClick={handleModalOpen}>
        <DimPlus />
      </div>
      <p className="aside-add-text" onClick={handleModalOpen}>Add&nbsp;team</p>
      <div hidden={!show}>
        <div className="modal-background smooth">
          <div className="modal-card">
            <form className='form' onSubmit={handleModalSubmit}>
              <p className="modal-title">New Team</p>
              <div className="flex-outer">
                <div className="modal-caption">
                  <label htmlFor='name'>Name: </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="modal-input"
                    value={newTeam.name}
                    onChange={handleModalChange}
                  />
                </div>
              </div>
              <ModalButtons handleModalClose={handleModalClose} />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

ModalWindow.propTypes = {
  show: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  handleModalOpen: PropTypes.func.isRequired,
  handleModalChange: PropTypes.func.isRequired,
  handleModalSubmit: PropTypes.func.isRequired,
  newTeam: PropTypes.shape({
    name: PropTypes.string.isRequire
  })
};

export default ModalWindow
