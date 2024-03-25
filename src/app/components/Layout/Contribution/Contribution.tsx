import React from 'react';
import Image from '../Element/Image';
import Title from '../Element/Title';
import ContributionBox from '../Element/ContributionBox';
import img from '../../Icons/IconContribution/Photo.png';

function Contribution() {
  return (
    <div className="contribution">
      <div className="contributionImg">
        <Image size={'big'} url={img} title={''} />
      </div>
      <div className="contributionLeft">
        <div>
          <Title
            titleContent={'Join Our Weekly Digest'}
            titleDescribe={'Get Exclusive Promotions & Updates Straight To Your Inbox.'}
          />
        </div>
        <div className="contributionBox">
          <ContributionBox />
        </div>
      </div>
    </div>
  );
}

export default Contribution;
