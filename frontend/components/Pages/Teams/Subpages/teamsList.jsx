import React, { useEffect, useState } from 'react';
import SeparateTeam from './separateTeam';
import '../../Teams/style';
import { Ball, Person, Rubbish } from "components/General/Icons";
import ModalWindow from './modalWindow';

const TeamsList = () => {
  const [teams, setTeams] = useState([]);
  const [activeTeam, setActiveTeam] = useState(null);
  const [show, setShow] = useState(false);
  const [newTeam, setNewTeam] = useState({ name: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

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
  };

  useEffect(() => {
    setLoading(true);
    fetch('/api/v1/teams')
      .then((response) => response.json())
      .then((teams) => {
        setTeams(teams);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Teams is loading...</p>;
  }

  if (error || !Array.isArray(teams)) {
    return <p>There was an error loading your teams!</p>;
  }

  return (
    <>
      <aside className="aside">
        <h2 className="aside-title">Team&nbsp;name</h2>
        {teams.map((team) => (
          <ul key={team.id} className="aside-name" onClick={() => setActiveTeam(team)}>
            <li>
              {team.name}
              <div className="t-ball-icon" alt="ball">
                <Ball />
              </div>
              <div className="t-person-icon" alt="person">
                <Person />
              </div>
              <div className="t-rubbish-icon" alt="rubbish">
                <Rubbish />
              </div>
            </li>
          </ul>
        ))}
        <ModalWindow show={show} newTitle={newTeam}
          handleModalClose={handleModalClose} handleModalOpen={handleModalOpen}
          handleModalChange={handleModalChange} handleModalSubmit={handleModalSubmit}
        />
      </aside>
      <footer className="footer">
        {activeTeam ? (
          <ul className="footer-content">
            <li>
              {<SeparateTeam activeTeam={activeTeam} />}
            </li>
          </ul>
        ) : null}
      </footer>
    </>
  )
}

export default TeamsList
