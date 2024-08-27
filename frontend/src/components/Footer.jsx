import React from 'react';

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    Button,
}from '../Styles/Global.styled';
import { ContactForm, FormInput, FormLabel, SubmitButton } from '../Styles/Footer.styled';
import { useForm, ValidationError } from '@formspree/react';

const Footer = () => {
    const [state, handleSubmit] = useForm("mdovpyvl");
  if (state.succeeded) {
      return (
        <PaddingContainer top="5rem" bottom="5rem">
            <Heading as="h1" size="h4" align="center">Message has been sent!</Heading>
        </PaddingContainer>
      );
  }
    return(
        <PaddingContainer id="Contact" top="5%" bottom="10%">
            <Heading as="h4" size="h4" align="center">
                MY CONTACT
            </Heading>
            <Heading as="h2" size="h2" align="center" top="0.5rem">
                Contact <BlueText>Me Here</BlueText>
            </Heading>
            <PaddingContainer top="3rem">
                <FlexContainer justify="center">
                    <ContactForm onSubmit={handleSubmit}>
                        <PaddingContainer bottom="2rem">
                            <FormLabel>Name:</FormLabel>
                            <FormInput
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                            >

                            </FormInput>
                        </PaddingContainer>
                        <PaddingContainer bottom="2rem">
                            {/* Form lable and form input */}
                            <FormLabel>Email:</FormLabel>
                            <FormInput
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your name"
                            >
                            </FormInput>
                        </PaddingContainer>
                        <PaddingContainer bottom="2rem">
                            <FormLabel>Message:</FormLabel>
                            <FormInput
                                as="textarea"
                                type="textarea"
                                id="message"
                                name="message"
                                placeholder="Enter your name"
                            >
                            </FormInput>
                        </PaddingContainer>
                        <FlexContainer justify="center">
                            <SubmitButton type="submit" disabled={state.submitting}>submit</SubmitButton>
                        </FlexContainer>
                    </ContactForm>
                </FlexContainer>
            </PaddingContainer>
        </PaddingContainer>
    );
}

export default Footer;