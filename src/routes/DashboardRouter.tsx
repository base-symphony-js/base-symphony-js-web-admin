import { Routes, Route, Navigate } from 'react-router-dom'
import {
  AlertModalPage,
  AlertPage,
  ButtonPage,
  DialogPage,
  HomePage,
  Inputs1Page,
  Inputs2Page,
  Inputs3Page,
  Inputs4Page,
  LoaderPage,
  TextPage,
} from '@pages'
import { DashboardLayout } from '@components'

export const DashboardRouter = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/examples/text-and-colors" element={<TextPage />} />
        <Route path="/examples/buttons" element={<ButtonPage />} />
        <Route path="/examples/inputs1" element={<Inputs1Page />} />
        <Route path="/examples/inputs2" element={<Inputs2Page />} />
        <Route path="/examples/inputs3" element={<Inputs3Page />} />
        <Route path="/examples/inputs4" element={<Inputs4Page />} />
        <Route path="/examples/alerts" element={<AlertPage />} />
        <Route path="/examples/alerts-modal" element={<AlertModalPage />} />
        <Route path="/examples/dialogs" element={<DialogPage />} />
        <Route path="/examples/loaders" element={<LoaderPage />} />
        <Route path="*" element={<Navigate to="/page-error" replace />} />
      </Routes>
    </DashboardLayout>
  )
}
