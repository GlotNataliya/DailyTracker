import React from 'react';
import SeparateTeam from './separateTeam';
import PropTypes from 'prop-types';

const ActiveTeam = ({ activeTeam }) => {
  return (
    <>
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

ActiveTeam.propTypes = {
  activeTeam: PropTypes.shape({
    name: PropTypes.string.isRequire
  })
};

export default ActiveTeam
