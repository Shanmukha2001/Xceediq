import { useCallback, useState } from "react";
import Account from "./components/Account/Account";
import Navbar from "./components/Navbar/Navbar";
import UserContext from "./Context/UserContext";
import Signup from "./components/signup/Signup";
import Login from './components/Login/Login';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  const login = useCallback((user) => {
    setUser(user);
  });

  const logout = useCallback(() => {
    setUser(null);
    nav('/');
  });

  let routes;
  if (user) {
    routes = (
      <Route path='/account' element={<Account />} />
    )
  } else {
    routes = (
      <>
        <Route path='/' element={<Navbar />} >
          <Route path="signup" element={<Signup />} />
          <Route path="Login" element={<Login />} />
        </Route>
        <Route path="*" element={<PageNotFound/>} />
      </>
    )
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      <Routes>
        {routes}
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
