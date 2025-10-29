import React from 'react';

export function Endereco() {
  const enderecos = [
    {
      nome: "Matriz - Centro",
      endereco: "Rua das Flores, 123 - Centro",
      cidade: "São Paulo - SP",
      telefone: "(11) 3333-3333",
      horario: "Segunda a Domingo: 11h às 23h"
    },
    {
      nome: "Filial - Zona Sul", 
      endereco: "Av. Paulista, 1000 - Jardins",
      cidade: "São Paulo - SP", 
      telefone: "(11) 4444-4444",
      horario: "Segunda a Domingo: 11h às 22h"
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>📍 Nossas Lojas</h1>
      
      <div style={styles.enderecosGrid}>
        {enderecos.map((endereco, index) => (
          <div key={index} style={styles.cardEndereco}>
            <h3 style={styles.nomeLoja}>{endereco.nome}</h3>
            <div style={styles.info}>
              <p>📍 {endereco.endereco}</p>
              <p>🏙️ {endereco.cidade}</p>
              <p>📞 {endereco.telefone}</p>
              <p>🕒 {endereco.horario}</p>
            </div>
            <button style={styles.botaoMapa}>
              🗺️ Ver no Mapa
            </button>
          </div>
        ))}
      </div>

      <div style={styles.mapaSection}>
        <h2 style={styles.subtitulo}>🗺️ Encontre a Loja Mais Próxima</h2>
        <div style={styles.mapaPlaceholder}>
          <p>📍 Mapa interativo será implementado aqui</p>
          <p>Utilizaremos Google Maps ou similar</p>
        </div>
      </div>
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
  enderecosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  },
  cardEndereco: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    border: '1px solid #e0e0e0',
    textAlign: 'center'
  },
  nomeLoja: {
    color: '#2c3e50',
    marginBottom: '1rem',
    fontSize: '1.5rem'
  },
  info: {
    marginBottom: '1.5rem',
    lineHeight: '1.6'
  },
  botaoMapa: {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem'
  },
  mapaSection: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  subtitulo: {
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '1.5rem'
  },
  mapaPlaceholder: {
    backgroundColor: '#ecf0f1',
    padding: '3rem',
    textAlign: 'center',
    borderRadius: '6px',
    color: '#7f8c8d'
  }
};

export default Endereco;