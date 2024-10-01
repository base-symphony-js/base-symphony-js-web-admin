import { Routes, Route, Navigate } from 'react-router-dom'
import { AlertPage, ButtonPage, HomePage, LoaderPage, TextPage } from '@pages'

export const DashboardRouter = () => {
  return (
    <div style={{ padding: 8 }}>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/examples/alerts" element={<AlertPage />} />
        <Route path="/examples/buttons" element={<ButtonPage />} />
        <Route path="/examples/loaders" element={<LoaderPage />} />
        <Route path="/examples/text-and-colors" element={<TextPage />} />
        <Route path="*" element={<Navigate to="/page-error" replace />} />
      </Routes>
    </div>
  )
}
