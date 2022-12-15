import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function RegisterPage() {
  return(
    <div className="RegisterForm" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/Photos/background.jpg')` }}>
      <Container >
        <Row className="vh-100 d-flex justify-content-center align-items-center ">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <p className=" mb-5">Registracija</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Naudotojo vardas
                        </Form.Label>
                        <Form.Control type="email" required placeholder="Įveskite naudotojo vardą"/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          El. paštas
                        </Form.Label>
                        <Form.Control type="email" required placeholder="Įveskite el. paštą"/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Slaptažodis</Form.Label>
                        <Form.Control type="password" required placeholder="Įveskite slaptažodį"/>
                      </Form.Group>
                      <div className="d-grid">
                        <Link to="/">
                          <Button variant="dark" type="submit">
                            Registruotis
                          </Button>
                        </Link>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Jau turite paskyrą?{" "}
                        <a href="/" className="text-dark fw-bold">
                          Prisijunkite!
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RegisterPage;