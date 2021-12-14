import React from 'react';
import Button from './components/Button';
import {MainWrapper, Title, Section, Content, RedContent} from './components/StyledC'

function Styled() {
  return (
    <MainWrapper>
      <Title>My Styled Components</Title>
      <Button primary>Primary Button</Button>
      <Button>Styled Button</Button>
      <Section>
        <Content red>
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
        </Content>  
        <RedContent>
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
        </RedContent>
      </Section>
    </MainWrapper>
  );
}

export default Styled;