import React from 'react';
import './style';
import NavTeam from './Selected/nav';
import TeamsList from './Selected/teamsList';

const Teams = () => {
  return (
    <section className="section">
      <NavTeam />
      <article className="article-content">
        <TeamsList />
      </article>
    </section>
  )
}

export default Teams
