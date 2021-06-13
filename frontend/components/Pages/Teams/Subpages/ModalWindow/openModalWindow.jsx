import React, { useState } from 'react';
import ModalWindow from './modalWindow';
import PropTypes from 'prop-types';

const OpenModalWindow = ({ teams, setTeams }) => {
  const [show, setShow] = useState(false);
  const [newTeam, setNewTeam] = useState({ name: '' });

  const handleModalClose = (e) => {
    const currentClass = e.target.className;

    if (currentClass === 'modal-card') {
      return;
    }

    setShow(false);
  };

  const handleModalOpen = () => {
    setShow(true);
  };

  const handleModalChange = (e) => {
    setNewTeam({
      name: e.target.value
    });
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch('/api/v1/teams', {
      method: 'POST',
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTeam)
    })
      .then((response) => response.json())
      .then((newTeam) => setTeams(teams.concat(newTeam)))
      .then(() => setShow(false));
    setTeams({ name: '' });
  };

  return (
    <>
      <ModalWindow show={show} newTeam={newTeam}
        handleModalClose={handleModalClose} handleModalOpen={handleModalOpen}
        handleModalChange={handleModalChange} handleModalSubmit={handleModalSubmit}
      />
    </>
  )
}

OpenModalWindow.propTypes = {
  teams: PropTypes.func.isRequired,
  setTeams: PropTypes.func.isRequired
};

export default OpenModalWindow
