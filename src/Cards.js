import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = (val) => {
    const [Count, setcount] = useState(0);
    const handleclick = () => {
        setcount(Count + 70);
        console.log(Count);
        console.log("button clicked");
    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={val.imgsrc} />
                <Card.Body>
                    <Card.Title>{val.Title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button onClick={handleclick} variant="primary">Go somewhere
                        {Count}</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Cards
