import React from 'react';
import Header from 'app/components/Layout/Header/Header';
import Button from 'app/components/Layout/Element/Button';
type Props = {};

const NotFoundPage = (props: Props) => {
  const title = '123123123';
  function alo() {
    document.location.href = '/login';
  }

  return (
    <div>
      <Header />
      <Button title="KiênAB" type="primary" icon="" onClick={alo} />
    </div>
  );
};

export default NotFoundPage;
