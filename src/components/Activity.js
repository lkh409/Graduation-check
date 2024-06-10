import React, { useMemo } from 'react';
import '../styles/Activity.css';

const Activity = ({ data }) => {
  // 채플과 봉사의 값을 저장할 useState
  //const [chapelValue, setChapelValue] = useState(0);
  //const [serviceValue, setServiceValue] = useState(0);
  const credits = useMemo(() => {
    if (!data) {
      return {}
    }

    const chapel = data.credits.find((c) => c.kind === 'CHAPEL')?.acquired ?? 0
    const volunteer = data.credits.find((c) => c.kind === 'VOLUNTEER')?.acquired ?? 0

    return { chapel, volunteer }
  }, [data]);

  return (
    <div className="Act-BoxWrappe">
      <div className='Act-box-titleAndEdit'>
        <h2 className="ActivityTitle">활동</h2>
      </div>
      <div className="Act-TagContainer">
        <div className="Act-TagAndInputContainer">
          <div className="Act-CreditWrapper">
         {credits.chapel} / 4
          </div>
          <span className="Act-Tag">채플</span>
        </div>
      </div>
      <div className="Act-TagContainer">
        <div className="Act-TagAndInputContainer">
          <div className="Act-CreditWrapper">
         {credits.volunteer} / 2 
          </div>
          <span className="Act-Tag">봉사</span>
        </div>
      </div>
    </div>
  );
};

export default Activity;



















