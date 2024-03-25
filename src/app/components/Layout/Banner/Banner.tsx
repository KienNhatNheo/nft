import React from 'react';
import BannerText from './BannerText';
import BannerStatistic from './BannerStatistic';
import NFTImage from '../Element/NFTImage';
import Avatar from './../../Icons/IconBanner/Avatar.png';
import '../../../styles/banner.scss';

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="leftBanner">
          <BannerText />
          <BannerStatistic />
        </div>
        <div className="rightBanner">
          <NFTImage
            author={'Animakid'}
            product={'Space Walking'}
            image={
              'https://s3-alpha-sig.figma.com/img/8ac9/e0e3/bcf2d5507a81254146143702cd71f923?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RDddvMvHQIYB1b12OzKuqPKIptAS-0VvzODlgJ~g8q5NcB6HcH53s1QqEZ4dzeSnlgNdB0WOkmGx1WyblYzO7kQDkIdc~8hCjFHAbiE595pAqlwo4fcpUEBsiTk9RlH5tFvqoNG0INAX6c8Gfm93Zh3wiRhSEmqIh4PAOcqqHyVmgE3Ya6RbVBbZXOCUkhEL3F~rrgkoCaPBNPmJKZ9HTp9itiawUkH1P7Fy3KFLeYvFVZgw81n6c3zPcf88wfd9igPwksgMsN~pl7jamfCzGW4HR1KaI5v5uU5dFmAsuALR9sAWGdUYAwe155oPXHzqJa6NXWOj1CSeCRdU00c~bg__'
            }
            icon={Avatar}
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
