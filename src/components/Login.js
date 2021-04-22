import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="./images/cta-logo-one.svg" alt="ctalogo1" />
          <SignUpButton>Get All There</SignUpButton>
          <Description>
            Get Premium Access to all content of Disney+ Hotstar. Enjoy Live
            shows at the comfort of your home.Take some popcorn and a drink and
            get ready for this rollercoaster of a ride. At just Rs.399 per month
          </Description>
          <CTALogoTwo src="./images/cta-logo-two.png" alt="ctalogo2" />
        </CTA>
        <BackgroundImage />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
`;

const BackgroundImage = styled.div`
  height: 100%;
  background-image: url("./images/login-background.jpg");
  background-size: cover;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  left: 0;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  display: flex;
  flex-direction: column;
  max-width: 650px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  transition-timing-function: ease-out;
  transition-opacity: 5s;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUpButton = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  max-width: 600px;
  width: 100%;
  letter-spacing: 1.5px;
  fot-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  :hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 15px;
  max-width: 600px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.3px;
`;
