import React from 'react';

interface Props {
  number: string;
  type: string;
}
function Statistic(props: Props) {
  return (
    <div className="statistic">
      <h4 className="number">{props.number}</h4>
      <div className="type">{props.type}</div>
    </div>
  );
}

export default Statistic;
