import { Routes, Route, Navigate } from 'react-router-dom'
import {
  AlertPage,
  ButtonPage,
  HomePage,
  Inputs1Page,
  Inputs2Page,
  LoaderPage,
  TextPage,
} from '@pages'

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
        <Route path="/examples/inputs1" element={<Inputs1Page />} />
        <Route path="/examples/inputs2" element={<Inputs2Page />} />
        {/* <Route path="/examples/inputs3" element={<Inputs3Page />} />
        <Route path="/examples/inputs4" element={<Inputs4Page />} /> */}
        <Route path="*" element={<Navigate to="/page-error" replace />} />
      </Routes>
    </div>
  )
}
