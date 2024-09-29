import './style.scss';
import scrollTop from '../../assets/images/topScroll.png';
import Orchid from '../Orchid';

function Footer() {
  return (
    <div className='footer'>
      <div className='footerContent'>
        <a href='#top' className='scrollTop'>
          <img src={scrollTop} alt='scroll' />
        </a>
        <div className='names'>
          <p>Sargis</p>
          <p>Varduhi</p>
        </div>
      </div>
      <div className='orchidWr'>
        <Orchid white />
      </div>
    </div>
  );
}

export default Footer;
