import ConnectPage from './pages/connect/page'
import MainPage from './pages/main/page'
import EmptyPage from './pages/empty/page';
import { Route, Routes, Navigate } from 'react-router-dom'

const EventReplayApplication = () => {
  return (
    <Routes>
      <Route path = '/connect' element = {<ConnectPage />} />
      <Route path = '/app' element = {<MainPage />} />
      <Route path = '/void' element = {<EmptyPage />} />
      <Route path = "*" element = {<Navigate to = '/app' />} />
    </Routes>
  )
}

export default EventReplayApplication;
