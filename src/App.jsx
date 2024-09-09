
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './register'
import Home from './home'
import Login from './login'
import GmailVerification from './forget-password'
import OtpInput from './get-otp'
import ResetPassword from './reset-password'

function App() {
return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/main' element={<Home/>}/>
        <Route path='/forget-password' element={<GmailVerification/>}/>
        <Route path='/get-otp' element={<OtpInput/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
