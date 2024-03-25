import React from 'react';
import ContributionInput from '../Element/ContributionBox';
import '../../../styles/footer.scss';
import shop from '../../Icons/IconHeader/Storefront.png';
import discord from '../../Icons/IconFooter/DiscordLogo.png';
import youtube from '../../Icons/IconFooter/YoutubeLogo.png';
import twitter from '../../Icons/IconFooter/Vector.png';
import instagram from '../../Icons/IconFooter/InstagramLogo.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerEle">
          <div className="footerTop">
            <img src={shop} alt="" />
            <div className="footerTopText">NFT Marketplace</div>
          </div>
          <div className="footerText">NFT marketplace UI created with Anima for Figma.</div>
          <div className="footerText">Join our community</div>
          <div className="logoFooter">
            <img src={discord} alt="" />
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <div className="footerEle">
          <div className="footerTop">
            <div className="footerTopText">Explore</div>
          </div>
          <div className="footerText">Marketplace</div>
          <div className="footerText">Rankings</div>
          <div className="footerText">Connect a wallet</div>
        </div>
        <div className="footerEle">
          <div className="footerTop">
            <div className="footerTopText">Join our weekly digest</div>
          </div>
          <div className="footerText">
            Get exclusive promotions & updates straight to your inbox.
          </div>
          <ContributionInput />
        </div>
      </div>
      <div className="copyright">Ⓒ NFT Market. Use this template freely.</div>
    </div>
  );
}

export default Footer;
