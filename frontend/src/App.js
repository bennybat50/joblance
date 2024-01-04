// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages';
import JobList from './pages/job-list';
import EmployerList from './pages/employer-list';
import About from './pages/about';
import Contact from './pages/contact';
import DashBookmark from './pages/dash-bookmark';
import DashCandidates from './pages/dash-candidates';
import DashChangePassword from './pages/dash-chnage-password';
import DashCompanyProfile from './pages/dash-company-profile';
import DashManageJob from './pages/dash-manage-profile';
import DashMessages from './pages/dash-messages';
import DashMyProfile from './pages/dash-my-profile';
import DashPostJob from './pages/dash-post-job';
import Dashboard from './pages/dashboard';
import EmployerDetail from './pages/employer-detail';
import JobDetail from './pages/job-detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/job-list' element={<JobList/>}/>
          <Route path='/employer-list' element={<EmployerList/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/dash-bookmark' element={<DashBookmark/>}/>
          <Route path='/dash-candidate' element={<DashCandidates/>}/>
          <Route path='/dash-change-password' element={<DashChangePassword/>}/>
          <Route path='/dash-company-profile' element={<DashCompanyProfile/>}/>
          <Route path='/dash-manage-job' element={<DashManageJob/>}/>
          <Route path='/dash-messages' element={<DashMessages/>}/>
          <Route path='/dash-my-profile' element={<DashMyProfile/>}/>
          <Route path='/dash-post-job' element={<DashPostJob/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/employer-detail' element={<EmployerDetail/>}/>
          <Route path='/job-detail' element={<JobDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
