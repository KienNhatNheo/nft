import React from 'react';
import Title from '../Element/Title';
import TrendImage from './TrendImage';
import ava1 from '../../Icons/IconTrend/trendAvatar.png';
import ava2 from '../../Icons/IconTrend/ava2.png';
import ava3 from '../../Icons/IconTrend/ava3.png';
import '../../../styles/trend.scss';

function Trend() {
  const trendProps = [
    {
      bigimg:
        'https://s3-alpha-sig.figma.com/img/a792/ddc0/c4e1193ffd08cf4918e6f696bbc8d8fe?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R9YBHfNsprojgYHH2izkv08f3zJmAVTttidwdHleGmNWL05LDH9FfwgQ3OLS-m0WHPG8CWtvomCKJClGZXUGWZwCSotfgs2A4w~xHaIxo3RqdQZO6HujCO1EUaoTVj6XN-gBCfXZZbGVquVe~LBakdOJ0Prt0HsRuxo8j6p7XIqVhh9uEwOol86bP37hUuEG1TytA~9WYTEhffmDQ9oOwL~4ktFPKiW5o1FKJYgtWzhf--KUjktSTh4fKS5oKaznSS6aR4TP63C1CFsA6mJ2XzDETcUdAs95KIkVxzE2xGs5BBXfch6WtRCZAzxUgixev77bijP7ov1OOXw7NZPXZA__',
      smallimg1:
        'https://s3-alpha-sig.figma.com/img/4eec/8eba/54b2d345dc1480b247b05bb6f0d1f429?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fEJroAxpgo6Ad8EVsTyvq4mR9iKtmVIj1WTSekLYTaUwsuCA12g-akweYGBbbYbaFr3RG9xJQ9uL3BiJj1JvK8zRLj~Af~ub05SEeZ7NYMG-1E5ZrtzcNwssMgpWrHW4Lzsajr7E4znXcaP2p6BeafQqu7fTwS1JrhYH2Q7BHiPs3toHoOesEJvMar76LJSzizmr67ELij~~tGr11qV9cqAYDbVlktUo1oBeuhBHyRfCaFQ-fmIyvThaTESRlAAWwUhz82K2Y2WMBNpaUJA0djUJCl01Ar6kHjxtla23JS9UTiHzJ2url-rSu63xsT5~XNmzCYFe8t8XOPSWcZalHA__',
      smallimg2:
        'https://s3-alpha-sig.figma.com/img/7e55/1754/df2c85a307298720a7483609e93b5fef?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dLB3QhFYtHae922UZY3GsOb8a1ZVtaG0y0CouC9U5iPkNRkMrxwAQi2JGYVjeWV52S8fwyf8T4BzRzFDyPvMrp42YD5n2pyCtNKHvftTKg7Ljb6J4dbqizJOHHjuauc1RMbr-zakogXlCLDZN2EcRqiPYrYSDYDW1bN4hSe~e1FqyXd1gkOgJ0YXnIfl9XNlnC-SCgVXX~p23c~LS3~Y70SGVZKarAuQiId5sxyG8vIKjvV~D8MGSYM3diQP-I~R~a2OFWEuasYByOvE0VLLB8ESlnRE~YFAdeGilyRC8uTdFt5tWMWSrX84Omdf1PiqZ-pAW0SmJA9jJfR1Pxmu5w__',
      text: '1025+',
      product: 'DSGN Animals',
      author: 'MrFox',
      icon: ava1,
    },
    {
      bigimg:
        'https://s3-alpha-sig.figma.com/img/a6f4/3f93/50c73503d13e1fe1a0e3277804ef1192?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MOT3zU7iIoZSnQ2DhAkWuX95F~Epbcgcnq9~aC3ka~HrEgaZK3HRCpvHGeaXFwA7RqzFsjoysYoMJL1D~T-8iazATIMFwsgGpu-yHbx-I8rJXGwGbSHQavGAkEO6NAO4RAGQXo3klJWGf5B8huvB8v-Kh2RHEbnyAuE3BZfOVhcaUmDRZ2bUicDPmN2~Kheh5N6jm-v~3aNTESPFUmyhiCE7P6NdgrLhqiT~IDaOy-Vem0xKqRAk5lVlgfAiC6fKBlzz8pYJZhzR-oQgkxcOjA5BBlgAyutzT9vqDdC8s7XETRdG94SAPzL0GtsvbdZRyqXVRogYmdJnzdRfDJUpnQ__',
      smallimg1:
        'https://s3-alpha-sig.figma.com/img/138c/f49a/c8b9122a6caea314c4c42023a611e74a?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=btA4NegvuuXGAsvJlMsqh1eidKPUOocWWJcPtQXBPwzIJN5XPsYwqOH5NUegDOc~IfUTcveGEexE2F~-~k3rkevWNbdRucUnfyf3N-i6YlwCW5jGJvFoxNmhM2NBr1Fp7XS4b5Anx5fZJrszAh5LXh-udjeJdb5kQ5HUNDbPi-hu5YjcITQxbQWtEPJy-EcwxCOLd5-27fcYBvZKruI~bNVIcF3nT5gN9xe3FvicIktJzEmdmBJXOdgQPFlMFrrJiswrCrk6Qai2nmsMfe256WwzGllCykHruAx7ahfjVbB8H8HGCaii-S9ODlMAzW9OyFOp0UcjMOfNlTUGqXvrZA__',
      smallimg2:
        'https://s3-alpha-sig.figma.com/img/8ef4/1021/aea8d3372e819451c56863985d896aa0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FJcPU9xja96ncgOUUec-URxEjcYuTWqS5tRgbEgPs0LY6oamhDphx-2icFWuKTvx1N9H56g3U7MoN5jDrhPBtrEAovABOvdvvRh7OExMJcHlOQM9hnDciXbUuJFWtXhMvOwCwY1mhMt6plgFCgFTzZQyITupVJEMbsKTGM8OhJcxzwsiBk~6Khs60IUOGkpc5JSVXSzT73bbfCILQCDbPfmdoVmvZA414MiiMu0Yl2xds7sDXMDtuZBQVprkhsjzBfJcAW3Ic11aNTgpgiWFF1dDlY~5EsBpc9dd1K67rGi4ghGFWgex6dKn984PHmK5JxGxmhEtTCJfO6reXP4ErA__',
      text: '1025+',
      product: 'Magic Mushrooms',
      author: 'Shroomie',
      icon: ava2,
    },
    {
      bigimg:
        'https://s3-alpha-sig.figma.com/img/e21b/d708/ab5a825e0fedd4f1daf3d715bf9577ae?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XfAJf1lPheCFjcetMo1It9SaBJ08TpgsGadY-ZQ~siwBLQoDHVEI0XNKJnrPhis-~bTTKWXBlZEKtjvZTW4FSDRUJvDvhPjudpGBmjHFH2Vjw2nAU8KpQOOJozRwpd5~Pg1ECRdLcTKoldniAAdL-Ua7Oi4S7uyokYzGa6JeyGQZKFlZ0-Yf3h0NH9xMOterGONJ65nGeJgWQa-AoOR-797mChL2~MHBjLZTTfFxWnInYUGtxZpwEk7QMsM9X8JodYvUwEjeMospx5PiBtY0~P71EUduyU3L85~MrHm9gizTTpKPWxWA4SBL2qyCem~Zp1kFOJ7DYD3bC7jsitrzMQ__',
      smallimg1:
        'https://s3-alpha-sig.figma.com/img/d983/47e1/73b90df9823e9f0887e7106bb434691d?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nNdinPZbsXVStbstUalrOfJ7ItmHZbHE3A9OgWPrl6nZVSN~yt0HI~2RC~k7cPQPvApGOBbMJDrmd4tPUPgXgs-II07kSFWKHjPkACoDOd24JUMUXduJiY0rPumMxfaGx2A9I33B3LwAcAw2o2on3Pbav1m5mNryz3zlOa3pOYHpJEoElgMrLMj3pNKG6AKafPcxX6gkkAk9Wr5mo64p6Mdu2iPRPzXTE36ViLlZ~KX6bjc0pWVq1HS7uSj9E0I99jseDxbmgCu0ZvoY-dyCr04l~2kf9RylqZLw7Ck~s7J9czH1mT-4NTC~BAbXwotlgJ4FPvHrtb9OHU~PM~-xvA__',
      smallimg2:
        'https://s3-alpha-sig.figma.com/img/8b1e/419a/e7379ad5b52877ce89231d09f29bbfa1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S9gRQPEcn6fiB-B74-jsY5WXqZIiPcbY4abHfGEvNZm~MaAV9RrY6CrBMfKIaoXIH98QlkwmCqhh~y5p~5Cs20kcN6kRUkxv54Y8yRqLuqwxIYvBOexShpZ5Uke-2w4LoJf0Oqo8i3IGhDY~VUnQTIi3K3vhVbBMhszaoon7miqJ8OztStFCjSBDFF2fsQkioLxitgpg3KrNpH70PP~qFbl9FDWM59o2rR7EEORqfVNReJjzFzgtFIWZs~1bNCO08FybP3SO4a~p~o6d-EYgZAfYeFq-7mTG1Ac-TJcyjvOfc~3PsqGBSpHLwWBPFq9ePdA-jtCMH~Z1cFxQKTmUeQ__',
      text: '1025+',
      product: 'DSGN Animals',
      author: 'MrFox',
      icon: ava3,
    },
  ];
  return (
    <div className="trend">
      <Title
        titleContent="Trending Collection"
        titleDescribe="Checkout our weekly updated trending collection."
      />
      <div className="trendContent">
        {trendProps.map((item, index) => (
          <div className="trendImageItem">
            <TrendImage
              bigimg={item.bigimg}
              smallimg1={item.smallimg1}
              smallimg2={item.smallimg2}
              text={item.text}
              product={item.product}
              author={item.author}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trend;
