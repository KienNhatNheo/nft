import React from 'react';
import Button from './Button';
import envelop from '../../Icons/IconContribution/EnvelopeSimple.png';

function ContributionInput() {
  return (
    <div className="ContributionInput">
      <input type="text" placeholder="Enter your email here" />
      <Button title={'Subcribe'} type="primary" icon={envelop} />
    </div>
  );
}

export default ContributionInput;
