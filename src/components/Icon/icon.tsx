import * as React from 'react';

type IconProps = {
  name: string,
  width: string,
  height: string,
}

const Icon:React.FC<IconProps> = ({
  name,
  width,
  height
}) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
