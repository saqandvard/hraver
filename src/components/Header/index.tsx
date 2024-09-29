import './style.scss';
import bg from '../../assets/images/bg_header.png';
import Frame from '../Frame';

function Header() {
  return (
    <div className='headerWrapper'>
      <div className='texts'>
        <p className='heaterText' id='top'>
          Տէր Քրիստոս
        </p>
        <p className='heaterText'>
          Քո օրհնությամբ դու մեզ միավորեցիր սուրբ ամուսնության մեջ
        </p>
        <div className='frameWr'>
          <Frame text='S & V' />
        </div>
      </div>
      <img className='bgImage' src={bg} alt='bg' />
      <p className='dateValue'>
        • <span>12</span>
        <span>10</span>
        <span>2024</span>•
      </p>
    </div>
  );
}

export default Header;
