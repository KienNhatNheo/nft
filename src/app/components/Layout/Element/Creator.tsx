import React from 'react';

interface creatorLO {
  name: string;
  type: string;
  totalSale: number;
}
function Creator(props: creatorLO) {
  return (
    <div className={props.type === 'center' ? 'creator center' : 'creator left'}>
      <div className="creatorName">{props.name}</div>
      <div className="totalSale">
        <span
          className={props.type === 'center' ? 'creatorTotalSale center' : 'creatorTotalSale left'}
        >
          Total Sale:
        </span>
        <span className={props.type === 'center' ? 'totalSaleValue center' : 'totalSaleValue left'}>
          {' '}
          {props.totalSale} ETH
        </span>
      </div>
    </div>
  );
}

export default Creator;
