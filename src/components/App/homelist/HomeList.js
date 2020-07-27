import React from 'react';
import PropTypes from 'prop-types';

const HomeList = ({ match, location, history }) => {
  console.log('match', match);
  console.log('location', location);
  console.log('history', history);

  console.log('name', match.params.name);

  return (
    <>

      <ul>
        <li>
        </li>
      </ul>

      {/* <Header greeting={`Welcome Home, ${match.params.name}`} /> */}
    </>
  );
};

HomeList.propTypes = {};

export default HomeList;
