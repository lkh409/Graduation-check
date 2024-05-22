import { BASE_URL } from "../options"

/**
 * @typedef {{ id: number, password: string }} XlsxOptions
 * @typedef {{ success: string }} XlsxOutput
 */

/**
 * XLSX 파일 업로드
 * 
 * @param {File} xlsx
 * @param {string} token
 * @returns {Promise<XlsxOutput>}
 */
export const create = async (xlsx, token) => {
    const formData = new FormData()
    formData.append('xlsx', xlsx)

    const response = await fetch(`${BASE_URL}/xlsx`, {
        method: 'POST',
        body: formData,
        headers: {
            Authorization: `Bearer ${token}`,
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

    if (response.status === 415) {
        return {
            success: false,
            message: '지원하지 않는 파일 확장자입니다'
        }
    }


    return { status: response.status }
}