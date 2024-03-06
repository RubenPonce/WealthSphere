import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const FeaturesSection = () => {
    return (
        <div className="features-section text-center py-5">
            <Container>
                <Row>
                    <Col>
                        <h2 className="mb-5">What We Can Offer</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Banking</Card.Title>
                                <Card.Text>
                                    Manage all your bank accounts in one place.
                                    Make transactions, set reminders, and more.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Investing</Card.Title>
                                <Card.Text>
                                    Get personalized investment advice.
                                    Track your portfolio's performance easily.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Budgeting</Card.Title>
                                <Card.Text>
                                    Create and manage budgets.
                                    Get insights into your spending habits.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
