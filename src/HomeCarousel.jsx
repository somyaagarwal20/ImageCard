import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const HomeCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src="https://img.freepik.com/premium-photo/solitary-winter-tree-reflects-calm-lake-embodying-serenity-as-snow-blankets-landscape_733217-1811.jpg" style={{ width: '100%' }} alt=''></img>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://img.freepik.com/premium-photo/solitary-winter-tree-reflects-calm-lake-embodying-serenity-as-snow-blankets-landscape_733217-1811.jpg" style={{ width: '100%' }} alt=''></img>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://img.freepik.com/premium-photo/solitary-winter-tree-reflects-calm-lake-embodying-serenity-as-snow-blankets-landscape_733217-1811.jpg" style={{ width: '100%' }} alt=''></img>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeCarousel
