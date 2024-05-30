import {React,Component} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class ClassCompBodyOne extends Component{
    render(){
        return(
        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>HTML</Card.Title>
                        <Card.Text>
                            This is Class Component One 
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
        )
    }

}
export default ClassCompBodyOne;