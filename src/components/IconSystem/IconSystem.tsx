import React, { JSX, ReactElement } from "react";

interface IconSystemProps {
  name: string;
  onClick: () => void;
  icon: React.ReactNode | ReactElement | JSX.Element;
}

const IconSystem: React.FC<IconSystemProps> = ({
  name = "default",
  onClick = () => {},
  icon = null,
}) => {
  return (
    <div className={`icon-system__${name}`} pointer-events-none>
      <div
        className={`icon-system__${name}-content pointer-events-auto inline-block cursor-pointer`}
        onClick={onClick}
      >
        <div className={`icon-system__${name}-icon`}>{icon}</div>
        <div className={`icon-system__${name}-name text-white`}>{name}</div>
      </div>
    </div>
  );
};

export default IconSystem;
