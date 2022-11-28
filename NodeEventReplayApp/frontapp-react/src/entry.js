import ConnectPage from './pages/connect/page'
import MainPage from './pages/main/page'
import SocketIO from './pages/socket/page'
import { Route, Routes, Navigate } from 'react-router-dom'

const EventReplayApplication = () => {
  return (
    <Routes>
      <Route path = '/connect' element = {<ConnectPage />} />
      <Route path = '/app' element = {<MainPage />} />
      <Route path = '*' element = {<Navigate to = '/app' />} />
      <Route path = 'socketio' element = {<SocketIO />} />
    </Routes>
  )
}

export default EventReplayApplication;
