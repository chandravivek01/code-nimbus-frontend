import { Container } from 'react-bootstrap';
import './App.css';
import CardList from './components/CardList';
import { useEffect, useState } from 'react';
import { getCourses } from './services/CourseService';

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
    <>
      <div className="App">
        <Container style={{ marginTop: '60px' }}>
          <div className='flexbox'>
            <CardList courses={courses} />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
