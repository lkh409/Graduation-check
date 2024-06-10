import React, { useState, useMemo } from 'react';
import '../styles/Major.css';

const Major = ({ data }) => {
  // 편집 모드 상태를 관리할 useState
  const [editMode, setEditMode] = useState(false);
  const credits = useMemo(() => {
    if (!data) {
      return {}
    }

    const requireMajor = data.credits.find((c) => c.kind === 'REQUIRED_MAJOR') ?? { required: 0, acquired: 0 }
    const optionalMajor = data.credits.find((c) => c.kind === 'OPTIONAL_MAJOR') ?? { required: 0, acquired: 0 }

    return {
      required: `${requireMajor.required} / ${requireMajor.acquired}`,
      optional: `${optionalMajor.required} / ${optionalMajor.acquired}`,
    }
  }, [data]);

  return (
    <div className="Maj-BoxWrapp">
      <div>
        <h2 className="Maj-Title">전공</h2>

      </div>
      <div className="Maj-RowContaine">
        <div className="Maj-DescriptionContainer">
          <p className="Maj-Description">전공 필수</p>
          <p className="Maj-Description">전공 선택</p>
        </div>
        <p className="Maj-Credits">필요학점 / 취득학점</p>
        <div className="Maj-CreditsContainer">
          <div className="Maj-Credits">
           {credits.required}
          </div>
          <div className="Maj-Credits">
           {credits.optional}
          </div>
        </div>
        <div className="Maj-DescriptionContainer">
          <p className="Maj-Description">학점</p>
          <p className="Maj-Description">학점</p>
        </div>
      </div>
    </div>
  );
};

export default Major;

