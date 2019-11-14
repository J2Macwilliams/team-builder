import React, { useState } from 'react';

import TeamForm from './Components/TeamForm';
import TeamMember from './Components/TeamMember';


import styled from "styled-components";
import bgrnd from "./img/team.jpg";

import './App.css';

const Container = styled.div`
background-image: url(${bgrnd});
background-position: center;
background-size: cover;
display:flex;
flex-direction:column;

height: 100vh;
h1 {color: white;
font-size:7rem;}
box-sizing: border-box;
`;

const TeamDiv = styled.div`
margin: 3%;
`;

function App() {
  const [teamMember, setTeamMember] = useState([{
    name: '',
    email: '',
    role: ''
  }]);

  const submit = person => {
    setTeamMember([...teamMember, person])
  }
  return (
    <div className="App">
      <Container>
        <h1>Team Builder</h1>

        <TeamForm submit={submit} />
        <TeamDiv>
          <TeamMember mates={teamMember} />
        </TeamDiv>

      </Container>
    </div>
  );
}

export default App;
