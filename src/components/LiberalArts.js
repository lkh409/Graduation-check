import { useMemo } from 'react';
import '../styles/LiberalArts.css'; // 외부 CSS 파일 import
import { useReadLocalStorage } from 'usehooks-ts';
import { getCreditForKind } from '../helpers';

const LiberalArts = ({ data }) => {
  const token = useReadLocalStorage('token')
  const credits = useMemo(() => {
    if (!data || Object.keys(data).length <= 0) {
      return {}
    }

    const creditGetter = getCreditForKind(data.credits)

    // 인성 교양
    const tenacityLiberalArts = creditGetter('TENACITY_LIBERAL_ARTS')

    // 필수(기초) 교양
    const requiredLiberalArts = creditGetter('REQUIRED_LIBERAL_ARTS')

    // 일반(균형) 교양
    const generalLiberalArts = creditGetter('GENERAL_LIBERAL_ARTS')

    // 자유 교양
    const freeLiberalArts = creditGetter('GENERAL')
    
    return {
      인성교양: `${tenacityLiberalArts.required} / ${tenacityLiberalArts.acquired}`,
      자유교양: `${freeLiberalArts.required} / ${freeLiberalArts.acquired}`,
      기초교양: `${requiredLiberalArts.required} / ${requiredLiberalArts.acquired}`,
      일반교양: `${generalLiberalArts.required} / ${generalLiberalArts.acquired}`,
      영역1: data.hasLiberalArts1 ? '이수' : '미이수',
      영역2: data.hasLiberalArts2 ? '이수' : '미이수',
      영역3: data.hasLiberalArts3 ? '이수' : '미이수',
      영역4: data.hasLiberalArts4 ? '이수' : '미이수'
    }
  }, [data]);

  return (
    <div className="Lib-BoxWrap">

      <h3 className="Lib-Title">교양</h3>
      <div className="Lib-CreditContain">
        <div className="Lib-CreditItem">
          <span className="Lib-CreditTitle">인성 교양</span>
          <span className='Lib-CreditValue'>{credits.인성교양}</span>

        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditTitle">자유 교양</span>
          <span className='Lib-CreditValue'>{credits.자유교양}</span>
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditTitle">기초 교양</span>
          <span className='Lib-CreditValue'>{credits.기초교양}</span>
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditTitle">일반 교양</span>
          <span className='Lib-CreditValue'>{credits.일반교양}</span>
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditLabel">1영역 교양</span>
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditLabel">2영역 교양</span>
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditLabel">3영역 교양</span>
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditLabel">4영역 교양</span>
        </div>
      </div>
      <div className="Lib-CreditWrap">
        <p className="Lib-Credit">학점</p>
        <p className="Lib-Credit">학점</p>
        <p className="Lib-Credit">학점</p>
        <p className="Lib-Credit">학점</p>
        <p className="Lib-Credit isIncomplete">{credits.영역1}</p>
        <p className="Lib-Credit isIncomplete">{credits.영역2}</p>
        <p className="Lib-Credit isIncomplete">{credits.영역3}</p>
        <p className="Lib-Credit isIncomplete">{credits.영역4}</p>
      </div>
    </div>
  );
}
  
export default LiberalArts;