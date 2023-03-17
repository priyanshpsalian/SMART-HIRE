import React from 'react';
import { Form } from 'react-bootstrap';
import { Col, Container, Row,Input, Label } from 'reactstrap';

//Import Images
import contactImage from "../../assets/images/contact.png";

const ContactContent = () => {    
    
    return (
        <React.Fragment>
             <section className="section">
                        <Container>
                            <Row className="align-items-center mt-5">
                                <Col lg={6}>
                                    <div className="section-title mt-4 mt-lg-0">
                                        <h3 className="title">Get in touch</h3>
                                        <p className="text-muted">Start working with Jobcy that can provide everything you need to generate
                                            awareness, drive traffic, connect.</p>
                                        <Form method="post" className="contact-form mt-4" name="myForm" id="myForm">
                                            <span id="error-msg"></span>
                                            <Row>
                                                <Col lg={12}>
                                                    <div className="mb-3">
                                                        <Label htmlFor="nameInput" className="form-label">Name</Label>
                                                        <Input type="text" name="name" id="name" className="form-control"
                                                            placeholder="Enter your name" />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="mb-3">
                                                        <Label htmlFor="emailInput" className="form-label">Email</Label>
                                                        <Input type="email" className="form-control" id="emaiol" name="email"
                                                            placeholder="Enter your email" />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="mb-3">
                                                        <Label htmlFor="subjectInput" className="form-label">Subject</Label>
                                                        <Input type="text" className="form-control" name="subject" 
                                                            placeholder="Enter your subject" />
                                                    </div>
                                                </Col>
                                                <Col lg={12}>
                                                    <div className="mb-3">
                                                        <Label htmlFor="meassageInput" className="form-label">Your Message</Label>
                                                        <textarea className="form-control"  placeholder="Enter your message" name="comments" rows="3"></textarea>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="text-end">
                                                <button type="button" id="submit" name="submit" className="btn btn-primary"> Send Message <i className="uil uil-message ms-1"></i></button>
                                            </div>
                                        </Form>
                                    </div>
                                </Col>
                                <Col lg={5} className="ms-auto order-first order-lg-last">
                                    <div className="text-center">
                                        <img src={contactImage} alt="" className="img-fluid" />
                                    </div>
                                    <div className="mt-4 pt-3">
                                        <div className="d-flex text-muted align-items-center mt-2">
                                            <div className="flex-shrink-0 fs-22 text-primary">
                                                <i className="uil uil-map-marker"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                <p className="mb-0">2453 Clinton StreetLittle Rock, California, USA</p>
                                            </div>
                                        </div>
                                        <div className="d-flex text-muted align-items-center mt-2">
                                            <div className="flex-shrink-0 fs-22 text-primary">
                                                <i className="uil uil-envelope"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                <p className="mb-0">contactus@Jobcy.com</p>
                                            </div>
                                        </div>
                                        <div className="d-flex text-muted align-items-center mt-2">
                                            <div className="flex-shrink-0 fs-22 text-primary">
                                                <i className="uil uil-phone-alt"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                <p className="mb-0">(+245) 223 1245</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>                                
                            </Row>                            
                        </Container>                        
                    </section>
                    <div className="map">
                        <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509157.364974411!2d-123.79641389801948!3d37.193115265681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1628684675253!5m2!1sen!2sin" height="350" style={{border:`0` ,width: `100%`}} allowFullScreen="" loading="lazy"></iframe>
                    </div>
        </React.Fragment>
    )
}

export default ContactContent
