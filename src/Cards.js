import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = (val) => {
    const [Count, setcount] = useState(0);
    const handleclick = () => {
        setcount(Count + 1);
        console.log(Count);
        console.log("button clicked");
    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={val.imgsrc} className='cardimg' />
                <Card.Body>
                    <Card.Title className='title'>{val.Title}</Card.Title>
                    <Card.Text className='descption'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Text>{val.price}</Card.Text>
                    <Card.Text>{val.category}</Card.Text>

                    <Button onClick={handleclick} variant="primary" className='bttn'>Go somewhere
                    </Button>{Count}
                </Card.Body>
            </Card>

        </div>
    )
}

export default Cards
