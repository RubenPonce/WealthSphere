import landscape from '../assets/landscape.png';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
export const NewsAndInformation = () => {
    return (
        <div className="news-and-information-section py-5" style={{backgroundImage: `url(${landscape})`}} >
        <Container className='new-section'>
            <Row>
            <Col>
                <h2 className="mb-5">News and Information</h2>
            </Col>
            </Row>
            <Row>
            <Col md={4}>
                <Card className="mb-4">
                <Card.Body>
                    <Card.Title>Stock Market News</Card.Title>
                    <Card.Text>
                    Stay up to date with the latest stock market news and trends.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4">
                <Card.Body>
                    <Card.Title>Personal Finance Tips</Card.Title>
                    <Card.Text>
                    Get tips on budgeting, saving, and investing your money.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4">
                <Card.Body>
                    <Card.Title>Financial Planning Advice</Card.Title>
                    <Card.Text>
                    Learn how to plan for your financial future and set goals.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            <Button variant="primary" size="lg">
            Read More
            </Button>
        </Container>
        </div>
    );
    }