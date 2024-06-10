/**
 * @typedef {{required: number, acquired: number }} Credit
 */

/**
 * 초과된 학점 정보를 불러옵니다
 * 
 * @param {Credit} credit
 * @returns {number}
 */
export const getExceededCredit = (credit) => {
    return credit.required < credit.acquired ? credit.acquired - credit.required : 0
}

/**
 * 지정한 kind 의 학점 정보를 불러옵니다
 * 
 * @param {{ required: number, acquired: number, kind: string }[]} credits
 * @returns {(kind: string) => Credit}
 */
export const getCreditForKind = (credits) => (kind) => {
    const credit = structuredClone(credits.find((c) => c.kind === kind) ?? { required: 0, acquired: 0 })

    // 일반(자유) 학점 요청
    if (kind === 'GENERAL') {
        // 일반 교양 학점 정보
        const generalLiberalArtsCredit = getCreditForKind(credits)('GENERAL_LIBERAL_ARTS')
        const generalLiberalArtsExceededCredit = getExceededCredit(generalLiberalArtsCredit)

        console.log(credit.acquired)

        // 일반 교양의 경우 초과 학점 중 4점까지만 인정됨
        credit.acquired += Math.min(4, generalLiberalArtsExceededCredit)

        console.log('general-liberal-arts', credit.acquired, Math.min(4, generalLiberalArtsExceededCredit))

        // 선택 전공
        const optionalMajor = getCreditForKind(credits)('OPTIONAL_MAJOR')

        credit.acquired += getExceededCredit(optionalMajor)

        console.log('OPTIONAL_MAJOR', credit.acquired, getExceededCredit(optionalMajor))

    }
    return credit
}