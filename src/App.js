import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DailyCalender from './pages/Calenders/DailyCalender';
import Dashboard from './pages/Dashboard';
import WeeklyCalender from './pages/Calenders/WeeklyCalenders';
import DailyRecording from './pages/Recordings/DailyRecording';
import WeeklyRecording from './pages/Recordings/WeeklyRecording';
import DailyAttendance from './pages/Attendances/DailyAttendance';
import WeeklyAttendance from './pages/Attendances/WeeklyAttendances=';
function App() {
  return (


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/calenders/daily-calender' element={<DailyCalender />} />
          <Route path='/calenders/weekly-calender' element={<WeeklyCalender />} />
          <Route path='/recordings/daily-recording' element={<DailyRecording />} />
          <Route path='/recordings/weekly-recording' element={<WeeklyRecording />} />
          <Route path='/attendances/daily-attendance' element={<DailyAttendance />} />
          <Route path='/attendances/weekly-attendance' element={<WeeklyAttendance />} />

        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
