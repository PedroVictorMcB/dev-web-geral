import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import CadastroPage from './pages/CadastroPage';
import LoginPage from './pages/LoginPage';
import CatalogoCursos from './pages/CatalogoCursos';
import Teste from './pages/Teste';
import Cursos from './pages/Cursos/Cursos';
import ProfessorPage from './pages/professorPage/ProfessorPage';
import DefaultTemplate from './Componentes/Templates/DefaultTemplate';
import ProfessorAddAula from './pages/ProfessorAddAula/ProfessorAddAula';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="cadastro" element={<CadastroPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="testes" element={<Teste />}/>
        <Route element={<DefaultTemplate />} >
          <Route path="/" element={<Main />} /> 
          <Route path="cursos" element={<Cursos />} />
          <Route path="CatalagodeCursos" element={<CatalogoCursos />} />  
          <Route path="professors" element={<ProfessorPage />} />
          <Route path="ProfessorAddAula" element={<ProfessorAddAula />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
