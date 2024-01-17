import React, { useEffect, useState } from 'react'
import Accordions from './Accordions';
import { getQuestions } from '../../services/CourseService';

const Strings = () => {

  const [ questions, setQuestions ] = useState([]);

  useEffect( () => {

    const fetchQuestions = async () => {

      const data = await getQuestions('strings');
      setQuestions(data);
    }

    fetchQuestions();
  }, []);

  return (
    <div>
      Strings
      <Accordions items={questions} />
    </div>
  )
}

export default Strings