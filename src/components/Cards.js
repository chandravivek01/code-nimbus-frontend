import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cards = ({ course }) => {

    const navigate = useNavigate();

    return (
        <>
            <Card style={{ width: '18rem', height: '450px' , position: 'relative' }}>
                <Card.Img 
                    variant="top" 
                    src={course.imageAddress} height={250}
                    onClick={ () => ( navigate(`/courses/${course.id}`) ) } 
                    style={ { cursor: 'pointer' }} />
                <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>
                        {course.description}
                    </Card.Text>
                    <Button
                        onClick={ () => ( navigate(`/courses/${course.id}`) ) }
                        style={{ fontSize: '1rem', position: 'absolute', bottom: '3%' }}
                    >
                        Go to the details
                    </Button>
                </Card.Body>
            </Card>

        </>
    );
}
export default Cards;