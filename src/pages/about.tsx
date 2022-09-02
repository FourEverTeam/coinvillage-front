import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: pink;
  border: none;
  color: white;
  padding: 13px 23px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const About = () => {
  return (
    <>
      <div>About Page</div>
      <StyledButton>예시 버튼</StyledButton>
    </>
  );
};

export default About;
