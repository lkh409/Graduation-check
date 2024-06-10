import React, { useMemo, useState, useEffect } from 'react';
import MainContentContainer3 from '../components/MainContentContainer';
import GraduationCheck from '../components/GraduationCheck'; // GraduationCheck 컴포넌트를 불러옴
import '../styles/App3.css';
import '../styles/Check_page.css';
import { useReadLocalStorage } from 'usehooks-ts';
import api from '../api'
import { getCreditForKind } from '../helpers';

function Check_page() {
  const token = useReadLocalStorage('token')
  const [data, setData] = useState({})
  const memoized = useMemo(() => {
    if (Object.keys(data).length <= 0) {
      return {}
    }

    const creditGetter = getCreditForKind(data.credits)

    // 인성 교양
    const tenacityLiberalArts = creditGetter('TENACITY_LIBERAL_ARTS')

    // 필수 교양
    const requiredLiberalArts = creditGetter('REQUIRED_LIBERAL_ARTS')

    // 일반 교양
    const generalLiberalArts = creditGetter('GENERAL_LIBERAL_ARTS')

    // 자유 교양
    const freeLiberalArts = creditGetter('GENERAL')

    console.log('GENERAL', freeLiberalArts)

    // 필수 전공
    const requiredMajor = creditGetter('REQUIRED_MAJOR')

    // 선택 전공
    const optionalMajor = creditGetter('OPTIONAL_MAJOR')

    return {
      tenacityLiberalArts,
      requiredLiberalArts,
      generalLiberalArts,
      freeLiberalArts,
      requiredMajor,
      optionalMajor
    }
  }, [data])

  useEffect(() => {
    api.members.credits(token).then((data) => setData(data))
  }, [])

  const preCredits = [
    memoized?.tenacityLiberalArts?.acquired ?? 0,
    memoized?.requiredLiberalArts?.acquired ?? 0,
    memoized?.generalLiberalArts?.acquired ?? 0,
    memoized?.freeLiberalArts?.acquired ?? 0,
    memoized?.requiredMajor?.acquired ?? 0,
    memoized?.optionalMajor?.acquired ?? 0
  ];

  const stdCredits = [
    memoized?.tenacityLiberalArts?.required ?? 0,
    memoized?.requiredLiberalArts?.required ?? 0,
    memoized?.generalLiberalArts?.required ?? 0,
    memoized?.freeLiberalArts?.required ?? 0,
    memoized?.requiredMajor?.required ?? 0,
    memoized?.optionalMajor?.required ?? 0
  ];


  return (
    <>
      <h2 className='success-check'>졸업요건 검사 완료!</h2>
      <div className='check-chart-bar'>
        {/* GraduationCheck 컴포넌트를 렌더링 */}
        <GraduationCheck
          stdcredits={stdCredits}
          precredits={preCredits}
          />
      </div>
      <p className='check-info-text'>추천하기 버튼을 누르면 각 영역의 세부 정보를 확인할 수 있습니다.</p>
      <div className="content-container">
          <MainContentContainer3 title="인성교양" precredit={memoized?.tenacityLiberalArts?.acquired} stdcredit={memoized?.tenacityLiberalArts?.required}/>
          <MainContentContainer3 title="기초교양" precredit={memoized?.requiredLiberalArts?.acquired} stdcredit={memoized?.requiredLiberalArts?.required} />
          <MainContentContainer3 title="일반교양" precredit={memoized?.generalLiberalArts?.acquired} stdcredit={memoized?.generalLiberalArts?.required}/>
          <MainContentContainer3 title="자유교양" precredit={memoized?.freeLiberalArts?.acquired} stdcredit={memoized?.freeLiberalArts?.required}/>
          <MainContentContainer3 title="전공필수" precredit={memoized?.requiredMajor?.acquired} stdcredit={memoized?.requiredMajor?.required}/>
          <MainContentContainer3 title="전공선택" precredit={memoized?.optionalMajor?.acquired} stdcredit={memoized?.optionalMajor?.required}/>
      </div>
    </>
  );
}

export default Check_page;
