import React from 'react'
import Cards from './Cards'

const CardList = ( { courses } ) => {
  return (
    <>
        {
            courses.map( course => ( <Cards key={course.title} course={course}/>) )
        }
    </>
  )
}

export default CardList