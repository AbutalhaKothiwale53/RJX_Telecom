import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPlan from './AddPlan';
import ViewPlan from './ViewPlan'; 

function App() {
  return (
    return (
    <React.Fragment>
      <BrowserRouter>

      <Navbar bg='dark' variant='dark'>
        <Container>
          <Nav>
          <Nav.Link href='/'>Home</Nav.Link> &nbsp;
          <Nav.Link href='/addPlan' >Add Plan</Nav.Link> &nbsp;
          <Nav.Link href='/viewPlan' >View Plan</Nav.Link> &nbsp;
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route excat path='/' element={<AddPlan />} />
        <Route excat path='/addPlan' element={<AddPlan />} />
        <Route path='/viewPlan' element={<ViewPlan />}/>
      </Routes>
      </BrowserRouter>
        {/*  */}
        
    </React.Fragment>
  );
}

export default App;
