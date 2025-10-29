import React from 'react';

export function Sobre() {
  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>🍕 Sobre o Restaurante</h1>
      
      <div style={styles.conteudo}>
        <section style={styles.secao}>
          <h2>📖 Nossa História</h2>
          <p>
            Fundado em 2008, o Restaurante Sabor & Arte nasceu do sonho de trazer 
            a autêntica culinária italiana combinada com toques da gastronomia brasileira. 
            Começamos como uma pequena pizzaria no centro da cidade e hoje somos referência 
            em qualidade e sabor.
          </p>
        </section>

        <section style={styles.secao}>
          <h2>🎯 Nossa Missão</h2>
          <p>
            Proporcionar experiências gastronômicas únicas através de pratos preparados 
            com ingredientes selecionados, técnicas tradicionais e muito amor pela culinária.
          </p>
        </section>

        <section style={styles.secao}>
          <h2>⭐ Diferenciais</h2>
          <div style={styles.diferenciais}>
            <div style={styles.diferencial}>
              <h3>🥬 Ingredientes Frescos</h3>
              <p>Utilizamos apenas ingredientes frescos e de qualidade</p>
            </div>
            <div style={styles.diferencial}>
              <h3>👨‍🍳 Chefs Experientes</h3>
              <p>Nossa equipe possui mais de 10 anos de experiência</p>
            </div>
            <div style={styles.diferencial}>
              <h3>🚚 Entrega Rápida</h3>
              <p>Entregamos em até 45 minutos na região central</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '1rem',
    maxWidth: '800px',
    margin: '0 auto'
  },
  titulo: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '2rem',
    fontSize: '2.5rem'
  },
  conteudo: {
    lineHeight: '1.6'
  },
  secao: {
    marginBottom: '3rem'
  },
  diferenciais: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginTop: '1.5rem'
  },
  diferencial: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #ecf0f1',
    textAlign: 'center'
  }
};

export default Sobre;