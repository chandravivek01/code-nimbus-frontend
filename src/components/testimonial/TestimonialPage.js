import React from 'react'

import { Card, Col, Container, Row } from 'react-bootstrap';

const TestimonialPage = () => {

    const testimonials = [
        {
            text: "I had a great experience working with this company. Their team is highly skilled and professional.",
            name: "John Doe",
            position: "CEO, XYZ Company",
            image: "url/to/your/image1.jpg",
        },
        {
            text: "The product exceeded my expectations. I would highly recommend it to others.",
            name: "Jane Smith",
            position: "Marketing Manager",
            image: "url/to/your/image2.jpg",
        },
    ];

    return (
        <div>
            <Container>
                <h1 className="text-center my-4">Customer Testimonials</h1>
                <Row>
                    {testimonials.map((testimonial, index) => (
                        <Col key={index} md={4} className="mb-4">
                            <Card style={ { height: '250px'}}>
                                <Card.Img variant="top" src={testimonial.image} alt={`Portrait of ${testimonial.name}`} />
                                <Card.Body>
                                    <Card.Text>{testimonial.text}</Card.Text>
                                    <Card.Title>{testimonial.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{testimonial.position}</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default TestimonialPage