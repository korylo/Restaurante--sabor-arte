import React from 'react';
import { useCart } from '../context/CartContext';

export function CartItem({ item }) {
  const { removerDoCarrinho, atualizarQuantidade } = useCart();

  return (
    <div style={styles.item}>
      <div style={styles.info}>
        <h4 style={styles.nome}>{item.nome}</h4>
        <p style={styles.descricao}>{item.descricao}</p>
        <p style={styles.precoUnitario}>R$ {item.preco.toFixed(2)} cada</p>
        
        <div style={styles.controlesQuantidade}>
          <button 
            style={styles.botaoQuantidade}
            onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}
          >
            -
          </button>
          <span style={styles.quantidade}>{item.quantidade}</span>
          <button 
            style={styles.botaoQuantidade}
            onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
          >
            +
          </button>
        </div>
      </div>
      
      <div style={styles.acoes}>
        <div style={styles.subtotal}>
          R$ {(item.preco * item.quantidade).toFixed(2)}
        </div>
        <button 
          style={styles.botaoRemover}
          onClick={() => removerDoCarrinho(item.id)}
        >
          🗑️ Remover
        </button>
      </div>
    </div>
  );
}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '1.5rem',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: 'white',
    marginBottom: '1rem',
    gap: '1rem'
  },
  info: {
    flex: 1
  },
  nome: {
    margin: '0 0 0.5rem 0',
    color: '#2c3e50',
    fontSize: '1.1rem'
  },
  descricao: {
    margin: '0 0 0.5rem 0',
    color: '#7f8c8d',
    fontSize: '0.9rem'
  },
  precoUnitario: {
    margin: '0 0 1rem 0',
    color: '#95a5a6',
    fontSize: '0.85rem'
  },
  controlesQuantidade: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  botaoQuantidade: {
    width: '30px',
    height: '30px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem'
  },
  quantidade: {
    minWidth: '30px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.1rem'
  },
  acoes: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '1rem'
  },
  subtotal: {
    fontWeight: 'bold',
    color: '#e74c3c',
    fontSize: '1.2rem'
  },
  botaoRemover: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.8rem'
  }
};

// NÃO deve ter export default!
// NÃO deve importar nada além do useCart!