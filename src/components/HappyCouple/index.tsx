import Facebook from '../../assets/images/svg/Facebook';
import Instagram from '../../assets/images/svg/Instagram';
import Telegram from '../../assets/images/svg/Telegram';
import Frame from '../Frame';
import './style.scss';

function HappyCouple() {
  return (
    <div className='happyCoupleWrapper'>
      <div className='happyCoupleContentWrapper'>
        <p className='happyCoupleTitle'>Սպասում ենք Ձեզ մեր հարսանիքին</p>
        <p className='happyCoupleSubTitle'>
          Սիրով հրավիրում ենք Ձեզ կիսելու մեզ հետ մեր կյանքի կարևոր և հիշարժան
          օրը
        </p>

        <div className='coupleWrapper'>
          <div className='coupleItem'>
            <Frame pink saq />
            <p className='nameValue'>Sargis Hakobyan</p>
            <p className='childOf'>Son of</p>
            <p className='parents'>
              Mr. Sasha <span>&</span> Mrs. Mariam
            </p>
            <div className='messengers'>
              <a
                href='https://www.facebook.com/sargishakobyann97'
                target='_blank'
              >
                <Facebook />
              </a>
              <a
                href='https://www.instagram.com/saqhakobyan97/'
                target='_blank'
              >
                <Instagram />
              </a>
              <a href='https://t.me/sargis_hakobyan' target='_blank'>
                <Telegram />
              </a>
            </div>
          </div>
          <div className='coupleItem'>
            <Frame pink vard />
            <p className='nameValue'>Varduhi Vardanyan</p>
            <p className='childOf'>Daughter of</p>
            <p className='parents'>
              Mr. Armen <span>&</span> Mrs. Susanna
            </p>
            <div className='messengers'>
              <a
                href='https://www.facebook.com/varduhi.vardanyan.104'
                target='_blank'
              >
                <Facebook />
              </a>
              <a href='https://www.instagram.com/_vardaanyan/' target='_blank'>
                <Instagram />
              </a>
              <a href='https://t.me/vardanyan_vard' target='_blank'>
                <Telegram />
              </a>
            </div>
          </div>
        </div>
        <div className='ourStory'>
          <a href='#story'>Մեր պատմությունը</a>
        </div>
      </div>
    </div>
  );
}

export default HappyCouple;
