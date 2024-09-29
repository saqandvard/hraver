import orchid from '../../assets/images/Orchid.png';
import Orchid_white from '../../assets/images/Orchid_white.png';
import './style.scss';

const Orchid = ({ down, white }: { down?: boolean; white?: boolean }) => {
  return (
    <div className='orchidWrapper'>
      <img src={white ? Orchid_white : orchid} alt='orchid' data-down={down} />
    </div>
  );
};
export default Orchid;
