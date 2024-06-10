import { BASE_URL } from "../options"

/**
 * @typedef {{ id: number, name: string }} Department
 */

/**
 * 등록된 학과 정보를 불러옵니다
 * 
 * @returns {Promise<Department[]>}
 */
export const findAll = async () => {
    const response = await fetch(`${BASE_URL}/departments`)
    const json = await response.json()
    if ([200].includes(response.status)) {
        return json
    }

    return { status: response.status }
}