import React, { useState } from "react";
import PropTypes from "prop-types";

const TooltipComponent = ({ text, position, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getTooltipStyle = () => {
    switch (position) {
      case "right":
        return { top: "50%", left: "100%", transform: "translateY(-50%)" };
      // Add more cases for other positions if needed
      default:
        return {}; // Default position
    }
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && (
        <div className="tooltip" style={getTooltipStyle()}>
          {text}
        </div>
      )}
    </div>
  );
};

TooltipComponent.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["right", "top", "bottom", "left"]),
  children: PropTypes.node.isRequired,
};

TooltipComponent.defaultProps = {
  position: "right",
};

export default TooltipComponent;
