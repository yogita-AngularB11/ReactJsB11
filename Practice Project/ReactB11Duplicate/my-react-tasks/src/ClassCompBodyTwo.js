import {React,Component} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class ClassCompBodyTwo extends Component{
    render(){
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="css.png/100px180" />
            <Card.Body>
                <Card.Title>CSS</Card.Title>
                <Card.Text>
                This is Class Component Two 
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        )
    }

}
export default ClassCompBodyTwo;