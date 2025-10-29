import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import styled from 'styled-components'

export function Header() {
  const { totalItens } = useCart()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>🍕 Restaurante Sabor & Arte</Logo>
        <Subtitle>Comida de qualidade, entregue na sua casa</Subtitle>
      </LogoContainer>
      
      <Nav>
        <NavLink to="/cardapio" $active={isActive('/cardapio')}>
          📖 Cardápio
        </NavLink>
        <NavLink to="/pedidos" $active={isActive('/pedidos')}>
          🛒 Pedidos
          {totalItens > 0 && <Badge>{totalItens}</Badge>}
        </NavLink>
        <NavLink to="/sobre" $active={isActive('/sobre')}>
          ℹ️ Sobre
        </NavLink>
        <NavLink to="/contato" $active={isActive('/contato')}>
          📞 Contato
        </NavLink>
        <NavLink to="/endereco" $active={isActive('/endereco')}>
          📍 Endereço
        </NavLink>
      </Nav>
    </HeaderContainer>
  )
}

// Styled Components
const HeaderContainer = styled.header`
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`

const Logo = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Subtitle = styled.p`
  margin: 0.5rem 0 0 0;
  color: #ecf0f1;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`

const NavLink = styled(Link)`
  background-color: ${props => props.$active ? '#e74c3c' : 'transparent'};
  color: white;
  border: 1px solid #ecf0f1;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${props => props.$active ? '#e74c3c' : '#34495e'};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`

const Badge = styled.span`
  background-color: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`