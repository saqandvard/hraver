import './style.scss';

import img1 from '../../assets/images/img1.jpeg';
import img2 from '../../assets/images/img2.jpeg';

function OurStory() {
  return (
    <div className='ourStoryWrapper'>
      <p className='title' id='story'>
        Մեր պատմությունը
      </p>
      <div className='gridContent'>
        <img src={img1} alt='image' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mauris
          odio tellus sem neque, pretium sem sed montes. Enim, cursus massa nec
          massa ultrices mauris donec id volutpat. Libero sed placerat morbi
          proin at nibh. Adipiscing nec pretium egestas.
        </p>
        <img src={img2} alt='image' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mauris
          odio tellus sem neque, pretium sem sed montes. Enim, cursus massa nec
          massa ultrices mauris donec id volutpat. Libero sed placerat morbi
          proin at nibh. Adipiscing nec pretium egestas.
        </p>
      </div>
    </div>
  );
}

export default OurStory;
