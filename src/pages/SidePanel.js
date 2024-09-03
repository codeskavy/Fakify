import React from 'react';

import '../styles/SidePanel.css';


const SidePanel = ({ position }) => {
  const isLeft = position === 'left';
  const content = isLeft ? (
    <>
      <div className="side-content">Creator Economy</div>
      <div className="side-content">$100B D2C Market</div>
    </>
  ) : (
    <>
      <div className="side-content">Launch brand in just 10 weeks</div>
      <div className="side-content">Platform dependency</div>
    </>
  );

  return (
    <div className={`side-panel ${position}`}>
      {content}
    </div>
  );
};

export default SidePanel;
