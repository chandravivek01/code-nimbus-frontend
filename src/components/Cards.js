import { Button, Card } from "react-bootstrap";

const Cards = ({ course }) => {

    return (
        <>
            <Card style={{ width: '18rem', height: '450px' , position: 'relative' }}>
                <Card.Img variant="top" src={course.imageAddress} height={250} />
                <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>
                        {course.description}
                    </Card.Text>
                    <Button
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