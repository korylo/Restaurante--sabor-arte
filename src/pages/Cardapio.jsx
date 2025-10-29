import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { produtos } from '../data/products';

export function Cardapio() {
  const categorias = {
    pizzas: produtos.filter(p => p.categoria === 'pizzas'),
    hamburgueres: produtos.filter(p => p.categoria === 'hamburgueres'),
    saladas: produtos.filter(p => p.categoria === 'saladas'),
    bebidas: produtos.filter(p => p.categoria === 'bebidas'),
    acompanhamentos: produtos.filter(p => p.categoria === 'acompanhamentos'),
    sobremesas: produtos.filter(p => p.categoria === 'sobremesas')
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>📖 Cardápio Completo</h1>
      
      {Object.entries(categorias).map(([categoria, itens]) => (
        <section key={categoria} style={styles.categoria}>
          <h2 style={styles.tituloCategoria}>
            {categoria === 'pizzas' && '🍕 Pizzas'}
            {categoria === 'hamburgueres' && '🍔 Hambúrgueres'}
            {categoria === 'saladas' && '🥗 Saladas'}
            {categoria === 'bebidas' && '🍹 Bebidas'}
            {categoria === 'acompanhamentos' && '🍟 Acompanhamentos'}
            {categoria === 'sobremesas' && '🍰 Sobremesas'}
          </h2>
          <div style={styles.gridProdutos}>
            {itens.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: '1rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  titulo: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '2rem',
    fontSize: '2.5rem'
  },
  categoria: {
    marginBottom: '3rem'
  },
  tituloCategoria: {
    color: '#2c3e50',
    borderBottom: '2px solid #e74c3c',
    paddingBottom: '0.5rem',
    marginBottom: '1.5rem',
    fontSize: '1.8rem'
  },
  gridProdutos: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem'
  }
};