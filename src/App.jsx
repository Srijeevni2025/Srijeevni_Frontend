import 'bootstrap/dist/css/bootstrap.min.css';
import './css/tailwind.css';
import './css/style.css';
// import './css/v2.css';


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LastScrollPosition from './assets/LastScrollPosition';
// import LandingPage from './pages/LandingPage'; // For landing page
import Home from './pages/Home';
import AuthContainer from './pages/AuthContainer';
import Company from './pages/Company';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import TermsOfUse from './pages/TermsOfUse';
import TermsOfService from './pages/TermsOfService';
import CustomerPolicy from './pages/CustomerPolicy';
import BecomeOurLabPartner from './pages/BecomeOurLabPartner';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ContextWrapper from './store/ContextWrapper';
import PrescriptionUpload from './components/PrescriptionUpload'
import LabProfile from './pages/LabProfile';
import MyProfile from './pages/MyProfile'
import LabDashboard from './pages/LabDashboard';



const App = () => {
  return (
    <>
      <BrowserRouter>

        <ContextWrapper>

          <LastScrollPosition />

          <Routes>

            {/* For landing page */}
            {/* <Route path='/' element={<LandingPage />} /> */}


            <Route path='/' element={<Home />}/>
            <Route path = '/PrescriptionUpload' element = {<PrescriptionUpload/>}/>
        
           
            
            {/* <Route path='/signin' element={<SignIn />} /> */}
            {/* <Route path='/signup' element={<SignUp />} /> */}
            <Route path='/company' element={<Company />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/termsofuse' element={<TermsOfUse />} />
            <Route path='/termsofservices' element={<TermsOfService />} />
            <Route path='/customerpolicy' element={<CustomerPolicy />} />
            <Route path='/becomeourlabpartner' element={<BecomeOurLabPartner />} />
            <Route path = "/LabProfile" element = {<LabProfile/>}/>
            <Route path = "/MyProfile" element = {<MyProfile/>}/>
            <Route path = "/LabDashboard" element = {<LabDashboard/>}/>
          </Routes>

        </ContextWrapper>

      </BrowserRouter>
    </>
  )
}

export default App;
