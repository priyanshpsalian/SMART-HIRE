import React from 'react';
import Section from '../Contact/Section'
import ContactContent from '../Contact/ContactContent';
import MetaTags from "react-meta-tags";

const Contact = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Contact | Jobcy - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section/>
            <ContactContent/>
        </React.Fragment>
    )
}

export default Contact;
