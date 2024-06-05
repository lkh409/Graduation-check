import { BASE_URL } from "../options"

/**
 * @typedef {{ id: number, name: string, department: { id: number, name: string }}} Member
 * @typedef {{ id: number, email: string, name: string, password: string, departmentId: number }} MemberCreateOptions
 * @typedef {{ status: number, message?: string }} ErrorOutput
 * @typedef {{ status: number, member: Member, token: string }} MemberCreateOutput
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
    if (response.status in [201, 409]) {
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

