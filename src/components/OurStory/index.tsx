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
          Մենք համակուրսեցիներ ենք , հանդիպել և ծանոթացել ենք ՀԱՊՀ- ում 2021
          թվանկանին։
        </p>
        <img src={img2} alt='image' />
        <p>
          Մեր նշանադրությունը իրականացել է 13 08 2023 թ-ին։ Իսկ այսօր տեղի
          կունենա մեր հարսանյաց արարողությունը, որի պատվավոր հյուրն եք նաև Դուք։
          😊
        </p>
      </div>
    </div>
  );
}

export default OurStory;
