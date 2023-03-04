import React from 'react';
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import AddPlan from './AddPlan';
import ViewPlan from './ViewPlan'; 

function App() {
  return (
    <React.Fragment>
            <BrowserRouter>
            <div className="container-fluid">
                <nav className='navbar navbar-expand-lg navbar-light bg-custom'>
                <span>Telecall Prepaid</span>
                <ul>
                    <li><Link to='addPlan'>Add Plan</Link></li>
                    <li><Link to='viewPlan'>View Plan</Link></li>
                </ul>
                </nav>
                
                <Routes>
                    <Route excat path="/" element={<AddPlan />} />
                <Route path='/AddPlan' element={<AddPlan />} />
                <Route path='/ViewPlan' element={<ViewPlan />} />
                </Routes>
            </div>
            </BrowserRouter>
       </React.Fragment>
  );
}

export default App;
