import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const FunctionalComponentTwo=()=>{
    return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>ReactJS</Card.Title>
                <Card.Text>
                This Functional Component is written using Arrow function
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
    }

export default FunctionalComponentTwo;