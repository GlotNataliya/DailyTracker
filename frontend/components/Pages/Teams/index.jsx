import React from 'react';
import './style';
import NavTeam from './Subpages/nav';
import TeamsList from './Subpages/teamsList';

const Teams = () => {
  return (
    <section className="section">
      <NavTeam />
      <article className="t-article-content">
        <TeamsList />
      </article>
    </section>
  )
}

export default Teams
