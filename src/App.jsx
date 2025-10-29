import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Cardapio } from './pages/Cardapio'
import { Pedidos } from './pages/Pedidos'
import { Sobre } from './pages/Sobre'
import { Contatos } from './pages/Contatos'
import { Endereco } from './pages/Endereco'

function App() {
  return (
    <CartProvider>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Cardapio />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contatos />} />
            <Route path="/endereco" element={<Endereco />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </CartProvider>
  )
}

// Styled Components
import styled from 'styled-components'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export default App