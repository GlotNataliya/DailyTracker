import React, { useEffect, useState } from 'react';
import '../../Teams/style';
import OpenModalWindow from './ModalWindow/openModalWindow';
import ActiveTeam from './ActiveTeam/activeTeam';
import { Ball, Person, Rubbish } from "components/General/Icons";

const TeamsList = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [activeTeam, setActiveTeam] = useState(null);

  const handleRemove = id => {
    var result = confirm("Do you want to remove the team?");
    if (result) {
      const token = document.querySelector('meta[name="csrf-token"]').content;
      fetch(`api/v1/teams/${id}`, {
        method: 'DELETE',
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
      })
        .then(() => {
          const newTeams = teams.filter((team) => team.id !== id);
          setTeams(newTeams);
        });
    }
  };

  const AllTeams = () => {
    return (
      teams.map((team) => (
        <ul key={team.id} className="aside-name" onClick={() => setActiveTeam(team)}>
          <li>
            {team.name}
            <div className="t-ball-icon" alt="ball">
              <Ball />
            </div>
            <div className="t-person-icon" alt="person">
              <Person />
            </div>
            <div className="t-rubbish-icon" alt="rubbish" title="delete" onClick={() => handleRemove(team.id)}>
              <Rubbish />
            </div>
          </li>
        </ul>
      )
      ))
  }

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
        <AllTeams />
        <OpenModalWindow teams={teams} setTeams={setTeams} />
      </aside>
      <ActiveTeam activeTeam={activeTeam} />
    </>
  )
}

export default TeamsList
