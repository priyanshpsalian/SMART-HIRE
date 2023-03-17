import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'

const Categories = () => {
    const categories =[
        {
            id:1,
            jobCategories : [
                {
                    id:1,
                    jobName : 'Accounting & Finance',
                    jobNumbers: 25
                },
                {
                    id:2,
                    jobName : 'Bank Jobs',
                    jobNumbers: 10
                },
                {
                    id:3,
                    jobName : 'Data Entry Job',
                    jobNumbers: 71
                },
                {
                    id:4,
                    jobName : 'Purchasing Manager',
                    jobNumbers: 40
                },
                {
                    id:5,
                    jobName : 'Project Manager',
                    jobNumbers: 86
                },
                {
                    id:6,
                    jobName : 'Education & training',
                    jobNumbers: 47
                },
                {
                    id:7,
                    jobName : 'Marketing & Advertising',
                    jobNumbers: 47
                },
                {
                    id:8,
                    jobName : 'Catering & Tourism',
                    jobNumbers: 47
                }
            ]
        },
        {
            id:2,
            jobCategories : [
                {
                    id:1,
                    jobName : 'Government Jobs',
                    jobNumbers: 120
                },
                {   id:2,
                    jobName : 'Defence Jobs',
                    jobNumbers: 73
                },
                {   id:3,
                    jobName : 'Teaching Jobs',
                    jobNumbers: 88
                },
                {
                    id:4,
                    jobName : 'Retail & Customer Services',
                    jobNumbers: 10
                },
                {
                    id:5,
                    jobName : 'Diploma Jobs',
                    jobNumbers: 55
                },
                {
                    id:6,
                    jobName : 'Health Care Jobs',
                    jobNumbers: 99
                },
                {
                    id:7,
                    jobName : 'Manufacturing & production',
                    jobNumbers: 27
                },
                {
                    id:8,
                    jobName : 'Performing arts & media',
                    jobNumbers: 11
                }
            ]
        },
        {
            id:3,
            jobCategories : [
                {
                    id:1,
                    jobName : 'It / Software Jobs',
                    jobNumbers: 175
                },
                {
                    id:2,
                    jobName : 'Logistics / Transportation',
                    jobNumbers: 60
                },
                {
                    id:3,
                    jobName : 'Sports Jobs',
                    jobNumbers: 42
                },
                {
                    id:4,
                    jobName : 'Forest Worker',
                    jobNumbers: 30
                },
                {
                    id:5,
                    jobName : 'Animal Care Worker',
                    jobNumbers: 120
                },
                {
                    id:6,
                    jobName : 'Digital Marketing',
                    jobNumbers: 88
                },
                {
                    id:7,
                    jobName : 'Administrative Officer',
                    jobNumbers: `04`
                },
                {
                    id:8,
                    jobName : 'Garage services',
                    jobNumbers: 75
                }
            ]
        }
    ]
    return (
        <React.Fragment>
                    <section className="section">
                        <Container >
                            <Row className="justify-content-center">
                                <Col lg={6}>
                                    <div className="text-center mb-5">
                                        <p className="badge bg-warning fs-14 mb-2">Jobs Live Today</p>
                                        <h4>Browse Job By Categories</h4>
                                        <p className="text-muted">Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row >
                                {categories.map((categoriesDetails, key) => (
                                <Col lg={4} key={key} >
                                    <Card className="job-Categories-box bg-light border-0">
                                        <CardBody className="p-4">                                        
                                            <ul className="list-unstyled job-Categories-list mb-0" >   
                                            {(categoriesDetails.jobCategories || []).map((jobCategoriesDetails, key) => (                                         
                                                <li key={key} >
                                                    <Link to="/joblist" className="primary-link">{jobCategoriesDetails.jobName} <span className="badge bg-soft-info float-end">{jobCategoriesDetails.jobNumbers}</span></Link>
                                                </li>
                                            ))}
                                            </ul>                                            
                                        </CardBody>
                                    </Card>
                                </Col>  
                                ))}                             
                            </Row>
                        </Container>
                    </section>
        </React.Fragment>
    )
}

export default Categories
