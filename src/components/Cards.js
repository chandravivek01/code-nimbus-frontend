import { Button, Card } from "react-bootstrap";

const Cards = ( { course } ) => {

    const posterUrl = `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhdGElMjBzdHJ1Y3R1cmVzJTIwYW5kJTIwYWxnb3JpdGhtc3xlbnwwfHwwfHx8MA%3D%3D`;

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={posterUrl} />
                <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
}
export default Cards;