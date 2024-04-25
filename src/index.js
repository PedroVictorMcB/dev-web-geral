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

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Main />} />
        <Route path="cadastro" element={<CadastroPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="CatalagodeCursos" element={<CatalogoCursos />} />
        <Route path="testes" element={<Teste />}/>
        <Route path="cursos" element={<Cursos />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
