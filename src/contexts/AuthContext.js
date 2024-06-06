import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 로그인 상태 업데이트 함수
  const login = (userInfo) => {
    setUser(userInfo);
  };

  // 로그아웃 상태 업데이트 함수
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 커스텀 훅으로 Context를 사용하기 쉽게 만들기
export const useAuth = () => useContext(AuthContext);
