import { Navigate, Route, Routes } from 'react-router'
import FrontPage from './pages/FrontPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import HomePage from './pages/HomePage.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'

function App() {
  return (  
    <>
      <main>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />}/>
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<HomePage /> } />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  )
}

export default App
