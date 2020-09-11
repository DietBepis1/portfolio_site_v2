import React from 'react'
import { CardLink, ListGroupItem } from 'reactstrap'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';

//import styling
import './AppCard.css';

function AppCard() {
    return (
        <div>
            <Card>
                <CardBody className='card-trans'>
                    <CardImg top width='100%' src="/media/images.jpg" alt='card img'/>
                    <CardTitle>Test</CardTitle>
                    <CardSubtitle>Still a test</CardSubtitle>
                    <CardText>lorem ipsum or something</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default AppCard;