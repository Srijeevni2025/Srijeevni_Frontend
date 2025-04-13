import 'bootstrap/dist/css/bootstrap.min.css';
import './css/tailwind.css';
import './css/style.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LastScrollPosition from './assets/LastScrollPosition';
import LandingPage from './pages/LandingPage';
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

const App = () => {
  return (
    <>
      <BrowserRouter>

        <LastScrollPosition />

        <Routes>

          {/* Launching Page */}
          <Route path='/' element={<LandingPage />} />


          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/signin' element={<SignIn />} /> */}
          {/* <Route path='/signup' element={<AuthContainer />} /> */}
          {/* <Route path='/company' element={<Company />} /> */}
          {/* <Route path='/about' element={<AboutUs />} /> */}
          {/* <Route path='/careers' element={<Careers />} /> */}
          {/* <Route path='/termsofuse' element={<TermsOfUse />} /> */}
          {/* <Route path='/termsofservices' element={<TermsOfService />} /> */}
          {/* <Route path='/customerpolicy' element={<CustomerPolicy />} /> */}
          {/* <Route path='/becomeourlabpartner' element={<BecomeOurLabPartner />} /> */}

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;
