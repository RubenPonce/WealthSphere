import React from 'react';
import {Container, Row, Col, Card, Carousel} from 'react-bootstrap';
import guy1 from '../assets/guy1.webp';
export const TestimonialsSection = () => {
    const testimonials = [
      {
        name: "Brian Templar",
        text: "WealthSphere has revolutionized how I manage my finances. It's a game changer!",
        img: "https://www1.bac-assets.com/homepage/spa-assets/images/assets-images-site-homepage-bmh-module-default-education-ent_edu_bac_6054435_397_es_gc_002-CSX82961418.jpg",
      },
      {
        name: "Bruce Lycan",
        text: "I've been using WealthSphere for years now and it has never let me down. I love it!",
        img: guy1,
      },
      {
        name: "Jennifer Cat",
        text: "WealthSphere is the best thing that's ever happened to me. I can't imagine life without it!",
        img: "https://placekitten.com/150/150",
      },
    ];

    return (
      <div className="testimonials-section text-center py-5" id="testimonials">
        <Container className='new-section'>
          <Row>
            <Col>
              <h2 className="mb-5 animated-title">
                What Our Customers Are Saying
              </h2>
            </Col>
          </Row>
          <Carousel>
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index} interval={2300}>
                <Row>
                  <Col>
                    <Card className="mb-4">
                      <Card.Body>
                        <Card.Text>{testimonial.text}</Card.Text>
                        <hr />

                        <div className="text-and-name">
                          <img
                            src={testimonial.img}
                            style={{ width: 150, height: 150 }}
                          />
                          <Card.Title className="m-3">
                            {testimonial.name}
                          </Card.Title>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="60"
                              height="60"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="tabler-icon tabler-icon-quote"
                            >
                              <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                              <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                            </svg>
                          </span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
    );
};


