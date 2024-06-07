import { BASE_URL } from "../options"

/**
 * @typedef {{ id: number, name: string, department: { id: number, name: string }}} Member
 * @typedef {{ id: number, email: string, name: string, password: string, departmentId: number }} MemberCreateOptions
 * @typedef {{ status: number, message?: string }} ErrorOutput
 * @typedef {{ status: number, member: Member, token: string }} MemberCreateOutput
 * @typedef {{ id: number, name: string, password: string, departmentId: number }} MemberUpdateOptions
 * @typedef {{ password: string }} MemberDeleteOptions
 * @typedef {{ id: number, year: number, semester: number, credit: number, grade: string, subject: { id: string, kind: string, creditKind: string, name: string } }} MemberSubject
 * @typedef {{ credits: { id: number, kind: string, acquired: number, required?: number }[], hasLiberalArts1: boolean, hasLiberalArts2: boolean, hasLiberalArts3: boolean, hasLiberalArts4: boolean }} MemberCredit 
 * @typedef {{ id: number, year: number, semester: number, grade: string, subjectId: string }} CreateMemberSubject
 * 
*/

/**
 * 회원가입을 진행합니다
 * 
 * @param {MemberCreateOptions} options 사용자 정보
 * @returns {Promise<MemberCreateOutput | ErrorOutput>}
 */
export const create = async (options) => {
    const response = await fetch(`${BASE_URL}/members`, { 
        method: 'POST', 
        body: JSON.stringify(options),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const json = await response.json()
    if ([201, 409].includes(response.status)) {
        return { 
            status: response.status,
            ...json,
        }
    }

    return { status: response.status }
}


/**
 * 현재 로그인된 사용자 정보를 불러옵니다
 * 
 * @param {string} token 사용자 정보
 * @returns {Promise<Member | ErrorOutput>}
 */
export const me = async (token) => {
    const response = await fetch(`${BASE_URL}/members/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const json = await response.json()
    if ([200].includes(response.status)) {
        return { 
            status: response.status,
            ...json,
        }
    }

    return { status: response.status }
}



/**
 * 회원 정보를 수정합니다
 * 
 * @param {MemberUpdateOptions} options 사용자 정보
 * @param {string} token 인증 토큰
 * @returns {Promise<Member | ErrorOutput>}
 */
export const update = async (options, token) => {
    const response = await fetch(`${BASE_URL}/members/me`, {
        method: "PUT",
        body: JSON.stringify(options),
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()
    if ([200].includes(response.status)) {
        return { 
            status: response.status,
            ...json,
        }
    }

    return { status: response.status }
}

/**
 * 회원 탈퇴를 진행합니다
 * 
 * @param {MemberDeleteOptions} options 사용자 비밀번호 진행
 * @param {string} token 인증 토큰
 * @returns {Promise<ErrorOutput>}
 */
export const leave = async (options, token) => {
    const response = await fetch(`${BASE_URL}/members/me`, {
        method: "DELETE",
        body: JSON.stringify(options),
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })

    return { status: response.status }
}

/**
 * 현재 로그인된 사용자 정보의 수강 과목을 불러옵니다
 * 
 * @param {string} token 사용자 정보
 * @returns {Promise<MemberSubject[]>}
 */
export const subjects = async (token) => {
    const response = await fetch(`${BASE_URL}/members/me/subjects`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const json = await response.json()
    if ([200].includes(response.status)) {
        return json
    }

    return { status: response.status }
}

/**
 * 현재 로그인된 사용자 정보의 수강 과목을 불러옵니다
 * 
 * @param {string} token 사용자 정보
 * @returns {Promise<MemberCredit>}
 */
export const credits = async (token) => {
    const response = await fetch(`${BASE_URL}/members/me/credits`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const json = await response.json()
    if ([200].includes(response.status)) {
        return json
    }

    return { status: response.status }
}

/**
 * 현재 로그인된 사용자 정보의 수강과목을 추가합니다
 * 
 * @param {CreateMemberSubject} options 추가할 과목 정보
 * @param {string} token 사용자 정보
 * @returns {Promise<MemberSubject>}
 */
export const addSubject = async (options, token) => {
    const response = await fetch(`${BASE_URL}/members/me/subjects`, {
        method: "POST",
        body: JSON.stringify(options),
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()
    if (response.ok) {
        return { status: response.status, ...json}
    }

    return { status: response.status }
}