import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { getCourses } from './services/CourseService';
import CardList from './components/CardList';
import DSA from './components/DSA';
import Backend from './components/Backend';
import Frontend from './components/Frontend';
import Cloud from './components/Cloud';

import './App.css';


function App() {

  const [ courses, setCourses ] = useState([]);

  useEffect( () => {

    const fetchCourses = async () => {

      const data = await getCourses();
      setCourses(data);
    }
    fetchCourses();
  }, []);

  return (
    
      <div className="App">
        <Container style={{ marginTop: '60px' }}>
          <div className='flexbox'>
            <Routes>
              <Route path='/' element={ <CardList courses={courses} /> } />
              <Route path='/1' element={ <DSA /> } />
              <Route path='/2' element={ <Backend /> } />
              <Route path='/3' element={ <Frontend /> } />
              <Route path='/4' element={ <Cloud /> } />
            </Routes>
          </div>
        </Container>
      </div>
    
  );
}

export default App;
