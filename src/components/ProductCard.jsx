import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { Modal } from './Modal'
import styled from 'styled-components'

export function ProductCard({ produto }) {
  const { adicionarAoCarrinho } = useCart()
  const [modalAberto, setModalAberto] = useState(false)

  const handleAdicionar = () => {
    adicionarAoCarrinho(produto)
    alert(`✅ ${produto.nome} adicionado ao carrinho!`)
  }

  return (
    <>
      <Card>
        <ImagemContainer onClick={() => setModalAberto(true)}>
          <Imagem src={produto.imagem} alt={produto.nome} />
          <CategoriaBadge>
            {produto.categoria === 'pizzas' && '🍕'}
            {produto.categoria === 'hamburgueres' && '🍔'}
            {produto.categoria === 'saladas' && '🥗'}
            {produto.categoria === 'bebidas' && '🍹'}
            {produto.categoria === 'acompanhamentos' && '🍟'}
            {produto.categoria === 'sobremesas' && '🍰'}
          </CategoriaBadge>
          <OverlayClique>🔍 Clique para ver detalhes</OverlayClique>
        </ImagemContainer>

        <CardContent>
          <TextContent>
            <Nome>{produto.nome}</Nome>
            <Descricao>{produto.descricao}</Descricao>
          </TextContent>
          
          <PrecoSection>
            <Preco>R$ {produto.preco.toFixed(2)}</Preco>
            <BotaoAdicionar onClick={handleAdicionar}>
              🛒 Adicionar
            </BotaoAdicionar>
          </PrecoSection>
        </CardContent>
      </Card>

      <Modal isOpen={modalAberto} onClose={() => setModalAberto(false)}>
        <ModalContent>
          <ModalImagemContainer>
            <ModalImagem 
              src={produto.imagem.replace('w=400&h=300', 'w=600&h=400')} 
              alt={produto.nome} 
            />
          </ModalImagemContainer>
          
          <ModalInfo>
            <ModalTitulo>{produto.nome}</ModalTitulo>
            <ModalDescricao>{produto.descricao}</ModalDescricao>
            
            <IngredientesSection>
              <IngredientesTitulo>🍴 Ingredientes:</IngredientesTitulo>
              <ListaIngredientes>
                {produto.ingredientes.map((ingrediente, index) => (
                  <IngredienteItem key={index}>
                    {ingrediente}
                  </IngredienteItem>
                ))}
              </ListaIngredientes>
            </IngredientesSection>

            <ModalPrecoSection>
              <ModalPreco>R$ {produto.preco.toFixed(2)}</ModalPreco>
              <BotaoAdicionarModal
                onClick={() => {
                  handleAdicionar()
                  setModalAberto(false)
                }}
              >
                🛒 Adicionar ao Carrinho
              </BotaoAdicionarModal>
            </ModalPrecoSection>
          </ModalInfo>
        </ModalContent>
      </Modal>
    </>
  )
}

// Styled Components
const Card = styled.div`
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }
`

const ImagemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background-color: #f8f9fa;
  cursor: pointer;
`

const Imagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ImagemContainer}:hover & {
    transform: scale(1.05);
  }
`

const CategoriaBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: rgba(255,255,255,0.9);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  z-index: 2;
`

const OverlayClique = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 0.9rem;
  font-weight: 600;

  ${ImagemContainer}:hover & {
    opacity: 1;
  }
`

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  gap: 1rem;
`

const TextContent = styled.div`
  flex: 1;
`

const Nome = styled.h3`
  margin: 0 0 0.75rem 0;
  color: #2c3e50;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.3;
`

const Descricao = styled.p`
  margin: 0;
  color: #7f8c8d;
  font-size: 0.95rem;
  line-height: 1.5;
`

const PrecoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`

const Preco = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #e74c3c;
  text-align: center;
`

const BotaoAdicionar = styled.button`
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 0.85rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #219a52;
  }
`

// Modal Styles
const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ModalImagemContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.2);
`

const ModalImagem = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
`

const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const ModalTitulo = styled.h2`
  color: #2c3e50;
  margin: 0;
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const ModalDescricao = styled.p`
  color: #7f8c8d;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
`

const IngredientesSection = styled.div`
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e9ecef;
`

const IngredientesTitulo = styled.h3`
  color: #2c3e50;
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
  font-weight: 600;
`

const ListaIngredientes = styled.ul`
  margin: 0;
  padding-left: 1.5rem;
  color: #5d6d7e;
  line-height: 1.6;
`

const IngredienteItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`

const ModalPrecoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 2px solid #ecf0f1;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const ModalPreco = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  color: #e74c3c;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

const BotaoAdicionarModal = styled.button`
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
  min-width: 200px;

  &:hover {
    background-color: #219a52;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
  }
`