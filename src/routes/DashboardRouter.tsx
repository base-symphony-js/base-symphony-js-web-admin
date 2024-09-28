import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '../pages'

export const DashboardRouter = () => {
  return (
    <div style={{ padding: 8 }}>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/page-error" replace />} />
      </Routes>
    </div>
  )
}
