import React from "react";
import './App.css';
import Formulario from './components/Formulario.jsx';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário</Typography>
      <Formulario/>
    </Container>
  );
}

export default App;
