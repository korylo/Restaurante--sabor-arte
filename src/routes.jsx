// src/routes.jsx - VERSÃO CORRIGIDA
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Cardapio from './pages/Cardapio';
import Endereco from './pages/Endereco';
import Contatos from './pages/Contatos';
import Sobre from './pages/Sobre';
import Pedidos from './pages/Pedidos';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Rota para a página inicial - pode adicionar depois */}
          <Route index element={<div>Página Inicial - Bem vindo!</div>} />
          <Route path="cardapio" element={<Cardapio />} />
          <Route path="endereco" element={<Endereco />} />
          <Route path="contato" element={<Contatos />} />  {/* Mudei para singular */}
          <Route path="sobre" element={<Sobre />} />
          <Route path="pedidos" element={<Pedidos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;