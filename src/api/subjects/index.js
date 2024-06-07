import { BASE_URL } from "../options"

/**
 * @typedef {{ id: string, kind: string, creditKind: string, name: string, credit: number }} Subject
 * @typedef {{ id?: string, token: string }} SubjectFindOptions
 * @typedef {{ status: number, message?: string }} ErrorOutput
 */

/**
 * 교과목을 찾습니다
 * 
 * @param {SubjectFindOptions} options 사용자 정보
 * @returns {Promise<Subject[] | ErrorOutput>}
 */
export const find = async (options) => {
    const response = await fetch(`${BASE_URL}/subjects`, { 
        method: 'GET',
        headers: {
            Authorization: `Bearer ${options.token}`,
            'Content-Type': 'application/json'
        },
    })
    const json = await response.json()
    if (response.status === 200) {
        return json
    }

    return { status: response.status }
}