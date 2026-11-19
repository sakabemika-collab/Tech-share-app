

import { createContext, useState, useContext } from 'react';

// Contextの器を作る
const AuthContext = createContext();

// Providerコンポーネント: 状態を全体に提供する
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = () => setUser({ name: 'Tech Taro' });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// カスタムフック: どこからでも1行で取り出せる
export const useAuth = () => useContext(AuthContext);