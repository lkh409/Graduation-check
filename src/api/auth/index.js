import { BASE_URL } from "../options"

/**
 * @typedef {{ id: number, password: string }} LoginOptions
 * @typedef {{ token: string }} LoginOutput
 * @typedef {{ status: number, message?: string }} ErrorOutput
 */

/**
 * 로그인을 진행합니다
 * 
 * @param {LoginOptions} options
 * @returns {Promise<LoginOutput | ErrorOutput>}
 */
export const login = async (options) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        body: JSON.stringify(options),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()
    if (response.status === 200) {
        return {
            status: response.status,
            ...json
        }
    }

    return { status: response.status }
}