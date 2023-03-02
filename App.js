import React from 'react';
import addPlan from 'AddPlan';
import viewPlan from 'ViewPlan';  

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
    <div className="container-fluid">
    <nav className='navbar navbar-expand-lg navbar-light bg-custom'>
    <span>Telecall Prepaid</span>
    <ul>
    <li><Link to='addPan'>
    Add Plan</Link></li>
    <li><Link to='viewPlan' >View Plan</Link></li>
    </ul>
    </nav>
      <Routes>
      <Route path='/addPlan' element={<AddPlan />} />
      <Route path='/viewPlan' element={<ViewPlan />} />
      </Routes>
    </div>
    </BrowserRouter>
    <React.Fragment>
  );
}

export default App;
