import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { validateEmail } from '../../utils/helpers';


function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    

    return (
        <section className="mb-5">
            <h1 className="text-center">Contact me</h1>
            <Form id="contact-form" onSubmit={handleSubmit} className="col-lg-6 offset-lg-3">
                <Form.Group className="mb-2">
                    <Form.Label htmlFor="name">Name:</Form.Label>
                    <Form.Control type="text" defaultValue={name} name="name" onBlur={handleChange} />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label htmlFor="email">Email address:</Form.Label>
                    <Form.Control type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </Form.Group>
                <Form.Group className="pb-2">
                    <Form.Label htmlFor="message">Message:</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="message"
                        defaultValue={message}
                        placeholder="Leave a message here"
                        style={{ height: '50px' }}
                        onBlur={handleChange}
                    />
                </Form.Group>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div className="d-grid gap-2">
                    <Button variant="dark" type="submit" size="lg">Submit</Button>
                </div>
            </Form>

        </section>
    )
}

export default Contact;


