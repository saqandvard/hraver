import './style.scss';
import Countdown, { zeroPad } from 'react-countdown';
import ceremony from '../../assets/images/ceremony.png';
import party from '../../assets/images/party.png';
import weddingRing from '../../assets/images/wedding-ring.png';
import dinnerTable from '../../assets/images/dinner-table.png';

interface CountdownRendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const CountdownRenderer = ({
  days,
  hours,
  minutes,
  seconds,
}: CountdownRendererProps) => {
  return (
    <div className='countdownWrapper'>
      <div>
        <h1>{zeroPad(days)}</h1>
        <span>Օր</span>
      </div>
      <div>
        <h1>{zeroPad(hours)}</h1>
        <span>Ժամ</span>
      </div>
      <div>
        <h1>{zeroPad(minutes)}</h1>
        <span>Րոպե</span>
      </div>
      <div>
        <h1>{zeroPad(seconds)}</h1>
        <span>Վայրկյան</span>
      </div>
    </div>
  );
};

function GettingMarried() {
  const targetDate = new Date('2024-10-12T17:30:00');

  return (
    <div className='gettingMarriedWrapper'>
      <p className='title'>Մենք ամուսնանում ենք</p>
      <p className='restaurant'>Elinar Restaurant ○ Armavir / Aknashen</p>
      <p className='day'>12 հոկտեմբերի 2024</p>
      <Countdown date={targetDate} renderer={CountdownRenderer} />
      <div className='maps'>
        <div>
          <img src={ceremony} alt='ceremony' />
          <img className='ic' src={weddingRing} alt='Wedding Ring' />
          <p className='type'>Հարսանեկան արարողություն</p>
          <p className='time'>15:30 - 17:00</p>
          <p className='place'>Սուրբ Հռիփսիմե եկեղեցի</p>
          <p className='placeInfo'>85 Mesrop Mashtots Street, Vagharshapat</p>
          <div className='mapBtns'>
            <a href='https://maps.app.goo.gl/PE8bynA4ye8iaP6U7' target='_blank'>
              <img
                src='https://i.pinimg.com/736x/45/d4/6f/45d46f9d68b662fe9427e6e56401c2c3.jpg'
                alt='Map'
              />
              Googl Maps
            </a>
            <a href='https://yandex.com/navi/-/CDTurAZy' target='_blank'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/YandexNavigatorLogo.svg/640px-YandexNavigatorLogo.svg.png'
                alt='Map'
              />
              Yandex Navigator
            </a>
          </div>
        </div>
        <div>
          <img src={party} alt='party' />
          <img className='ic' src={dinnerTable} alt='Dinner Table' />
          <p className='type'>Հարսանեկան խնջույք</p>
          <p className='time'>17:30 - 24:00</p>
          <p className='place'>Էլինար ռեստորան</p>
          <p className='placeInfo'>37RV+X2, Aknashen</p>
          <div className='mapBtns'>
            <a href='https://maps.app.goo.gl/KZJL6JyXgpsf48hW9' target='_blank'>
              <img
                src='https://i.pinimg.com/736x/45/d4/6f/45d46f9d68b662fe9427e6e56401c2c3.jpg'
                alt='Map'
              />
              Googl Maps
            </a>
            <a
              href='https://yandex.ru/navi/org/158438087040?si=6jrmbzne84pzwzqxher8m1kp9m'
              target='_blank'
            >
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/YandexNavigatorLogo.svg/640px-YandexNavigatorLogo.svg.png'
                alt='Map'
              />
              Yandex Navigator
            </a>
          </div>
        </div>
      </div>
      <div className='mapIframe'>
        <div className='mapIframeItem'>
          <p>Պսակադրություն</p>
          <span>Սուրբ Հռիփսիմե եկեղեցի ք․ Էջմիածին</span>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.8720248367476!2d44.309466799999996!3d40.166998299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a95df45ee7879%3A0x5edc387da55a163a!2z0KbQtdGA0LrQvtCy0Ywg0KHQstGP0YLQvtC5INCg0LjQv9GB0LjQvNC1!5e1!3m2!1sru!2sam!4v1727562210621!5m2!1sru!2sam'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div className='mapIframeItem'>
          <p>Հարսանյաց հանդիսություն</p>
          <span>«Էլինար» ռեստորան գ․ Ակնաշեն</span>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d961.770491802774!2d44.2918858!3d40.0925775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406ac1c2442b7739%3A0xc7e5cf7a268f251f!2z1LfVrNWr1bbVodaAINW81aXVvdW_1bjWgNWh1bbVodW11avVtiDVsNWh1bTVodWs1avWgA!5e1!3m2!1sru!2sam!4v1727562327686!5m2!1sru!2sam'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default GettingMarried;
