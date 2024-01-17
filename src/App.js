import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { getCourses } from './services/CourseService';
import CardList from './components/CardList';

import './App.css';

import DSA from './components/courses/DSA';
import Backend from './components/courses/Backend';
import Frontend from './components/courses/Frontend';
import Cloud from './components/courses/Cloud';
import Strings from './components/dsa/Strings';

// const DSA = lazy(() => { import('./components/courses/DSA') });
// const Backend = lazy(() => { import('./components/courses/Backend') });
// const Frontend = lazy(() => { import('./components/courses/Frontend') });
// const Cloud = lazy(() => { import('./components/courses/Cloud') });
// const Strings = lazy(() => { import('./components/dsa/Strings') });

function App() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {

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

            <Route path='/' element={<CardList courses={courses} />} />
            <Route path='/courses/1' element={ <DSA /> } /> 
            <Route path='/courses/2' element={ <Backend /> } /> 
            <Route path='/courses/3' element={ <Frontend /> } /> 
            <Route path='/courses/4' element={ <Cloud /> } /> 
            <Route path='/questions/strings' element={ <Strings /> } /> 
            {/* <Route path='/courses/1' element={<Suspense fallback={<div>Loading ...</div>}><DSA /> </Suspense>} /> */}
            {/* <Route path='/courses/2'
              element={<Suspense fallback={<div>Loading ...</div>}><Backend /> </Suspense>}
            /> */}
            {/* <Route path='/courses/3'
              element={<Suspense fallback={<div>Loading ...</div>}><Frontend /> </Suspense>}
            /> */}
            {/* <Route path='/courses/4'
               element={<Suspense fallback={<div>Loading ...</div>}><Cloud /> </Suspense>}
            /> */}
            {/* <Route path='/dsa/1' element={<Suspense fallback={<div>Loading ...</div>}><Strings /> </Suspense>} /> */}

          </Routes>
        </div>
      </Container>
    </div>

  );
}

export default App;
