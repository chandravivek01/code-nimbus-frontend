import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { getCourses, getDsaTopics } from './services/CourseService';
import CardList from './components/CardList';
import DSA from './components/DSA';
import Backend from './components/Backend';
import Frontend from './components/Frontend';
import Cloud from './components/Cloud';

import './App.css';


function App() {

  const [ courses, setCourses ] = useState([]);
  const [ dsaTopic, setDsaTopic ] = useState([]);

  useEffect( () => {

    const fetchCourses = async () => {

      const data = await getCourses();
      setCourses(data);
    }
    const fetchDsaTopics = async () => {

      const data = await getDsaTopics();
      setDsaTopic(data);
    }
    fetchCourses();
    fetchDsaTopics();
  }, []);

  return (
    
      <div className="App">
        <Container style={{ marginTop: '60px' }}>
          <div className='flexbox'>
            <Routes>
              <Route path='/' element={ <CardList courses={courses} /> } />
              <Route path='/courses/1' element={ <DSA dsaTopic={dsaTopic} /> } />
              <Route path='/courses/2' element={ <Backend /> } />
              <Route path='/courses/3' element={ <Frontend /> } />
              <Route path='/courses/4' element={ <Cloud /> } />
            </Routes>
          </div>
        </Container>
      </div>
    
  );
}

export default App;
