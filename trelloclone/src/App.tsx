import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './auth/Login';
import { Register } from './auth/Register';
import { Dashboard } from './auth/Dashboard';

 export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to= "/login"/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}