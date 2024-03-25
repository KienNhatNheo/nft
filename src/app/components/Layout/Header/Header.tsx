import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DEFAULT_LANGUAGE } from 'locales/i18n';
import { Epath } from 'app/routes/routesConfig';
import '../../../styles/header.scss';
import Button from '../Element/Button';
import userImage from '../../Icons/IconHeader/User.png';
import logo from '../../Icons/IconHeader/Storefront.png';

function Header() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogOut = () => {
    i18n.changeLanguage(DEFAULT_LANGUAGE);
    history.push(Epath.loginPage);
  };

  function goToSignIn() {
    document.location.href = '/login';
  }
  return (
    <div className="header-navbar">
      <div className="header-logo">
        <img src={logo} alt="" />
        <div className="logoName">NFT Marketplace</div>
      </div>
      <div className="header-bar">
        <Link className="tabLink" to={'/marketplace'}>
          Marketplace
        </Link>
        <Link className="tabLink" to={'/rankings'}>
          Rankings
        </Link>
        <Link className="tabLink" to={'/connectawallet'}>
          Connect a wallet
        </Link>
        <div className="headerButton">
          <Button title="Sign Up" icon={userImage} onClick={goToSignIn} type="secondary" />
        </div>
      </div>
    </div>
  );
}

export default Header;
