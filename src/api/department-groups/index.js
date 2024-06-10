import { BASE_URL } from "../options"

/**
 * @typedef {{ id: number, name: string, departments: { id: number, name: string }[] }} DepartmentGroup
 */

/**
 * 등록된 학과 그룹 정보를 불러옵니다
 * 
 * @returns {Promise<DepartmentGroup[]>}
 */
export const findAll = async () => {
    const response = await fetch(`${BASE_URL}/department-groups`)
    const json = await response.json()
    if ([200].includes(response.status)) {
        return json
    }

    return { status: response.status }
}