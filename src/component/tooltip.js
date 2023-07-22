import React from 'react';


const ReactToolTip = ({
  title,
  children,
  position,
  containerClass,
  theme,
}) => {
  return (
    <div className={`tooltip ${containerClass}`}>
      {children}
      <div
        className={`tooltiptext ${
          theme === 'dark' ? `dark` : `light`
        } tooltip-${position}`}
      >
        {title}
        <span className="arrow"></span>
      </div>
    </div>
  );
};

export default ReactToolTip;


