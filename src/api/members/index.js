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

/**
 * 사용자 정보를 업데이트합니다.
 * 
 * @param {{ name: string, departmentId: number, password: string }} updateData 사용자의 업데이트할 정보
 * @returns {Promise<MemberUpdateOutput>}
 */
export const updateMemberInfo = async (updateData) => {
    const { name, departmentId, password } = updateData;
    const token = localStorage.getItem('token'); // 로컬 스토리지에서 사용자 토큰 가져오기

    if (!token) {
        return { status: 401, message: "No authorization token found" };
    }

    try {
        const response = await fetch(`${BASE_URL}/members/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                departmentId,
                password
            })
        });

        const json = await response.json();
        if (response.status === 200) {
            return {
                status: response.status,
                updatedUser: json.member, // 서버가 반환하는 업데이트된 사용자 정보
                message: json.message
            };
        } else {
            return {
                status: response.status,
                message: json.message
            };
        }
    } catch (error) {
        console.error('Error updating user info:', error);
        return { status: 500, message: 'Server error during the user info update' };
    }
}