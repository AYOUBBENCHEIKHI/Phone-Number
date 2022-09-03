import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/partials/Navbar";
import Phones from "./components/phone/Phones";
import SignIn from "./components/users/SignIn";
import SignUp from "./components/users/SignUp";
import { PhoneProvider } from "./data/phonesContext/PhonesContext";
import { UserProvider } from "./data/usersContex/UserContext";
import Home from "./pages/Home"
//
//<Route path={"/signin"} element={<SignIn/>}/>
function App() {
  return (
      <BrowserRouter> 
      <Navbar/>
      <UserProvider>
        <Toaster/>
          <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/signin"} element={<SignIn/>}/>
            <Route path={"/signup"} element={<SignUp/>}/>
            <Route path={"/phones"} element={<PhoneProvider><Phones/></PhoneProvider>}/>
          </Routes>
      </UserProvider>
      </BrowserRouter>
  );
}

export default App;
