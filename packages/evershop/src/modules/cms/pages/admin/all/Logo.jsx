import PropTypes from 'prop-types';
import React from 'react';
import './Logo.scss';

export default function Logo({ dashboardUrl }) {
  return (
    <div className="logo">
      
      <a href={dashboardUrl} className="flex items-end">
        {/* <img src={require('.github/images/cbslogo.png')} /> */}
        <span className="font-bold">CBS</span>
      </a>
    </div>
  );
}

Logo.propTypes = {
  dashboardUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'header',
  sortOrder: 10
};

export const query = `
  query Query {
    dashboardUrl: url(routeId:"dashboard")
  }
`;
