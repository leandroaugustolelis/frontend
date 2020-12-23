import React, { useState } from 'react';

import Header from './components/Header';

import './App.css';
import backgroundImage from './assets/background.jpg'

/**
 * Componente
 * Propriedade
 * Estado
 * 
 */

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  //useState retorna Array com 2 posições

  function handleAddProject() {
    // projects.push(`Novo Projeto ${Date.now()}`)

    setProjects([...projects, `Novo Projeto ${Date.now()}`])

    console.log(projects);

  }

  return (
    <>
      <Header title="Projects" />

      <img width={300} src={backgroundImage} />
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
     
    </>
  )
}

export default App;
