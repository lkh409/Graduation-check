import React, { useState } from 'react';
import '../styles/Activity.css';

const Activity = () => {
  // 채플과 봉사의 값을 저장할 useState
  const [chapelValue, setChapelValue] = useState(0);
  const [serviceValue, setServiceValue] = useState(0);

  return (
    <div className="Act-BoxWrappe">
      <div className='Act-box-titleAndEdit'>
        <h2 className="ActivityTitle">활동</h2> 
      </div>
      <div className="Act-TagContainer">
        <div className="Act-TagAndInputContainer">
          <div className="Act-CreditWrapper">
         0 / 4
          </div>
          <span className="Act-Tag">채플</span>
        </div>
      </div>
      <div className="Act-TagContainer">
        <div className="Act-TagAndInputContainer">
          <div className="Act-CreditWrapper">
         0 / 2 
          </div>
          <span className="Act-Tag">봉사</span>
        </div>
      </div>
    </div>
  );
};

export default Activity;



















