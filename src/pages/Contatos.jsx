import React from 'react';

export function Contatos() {
  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>📞 Entre em Contato</h1>
      
      <div style={styles.contatosGrid}>
        <div style={styles.cardContato}>
          <h3>📍 Endereço</h3>
          <p>Rua das Flores, 123 - Centro</p>
          <p>São Paulo - SP, 01234-567</p>
        </div>

        <div style={styles.cardContato}>
          <h3>📞 Telefones</h3>
          <p><strong>WhatsApp:</strong> (11) 99999-9999</p>
          <p><strong>Telefone Fixo:</strong> (11) 3333-3333</p>
        </div>

        <div style={styles.cardContato}>
          <h3>🕒 Horário de Funcionamento</h3>
          <p><strong>Segunda a Sexta:</strong> 11h às 23h</p>
          <p><strong>Sábados:</strong> 11h às 00h</p>
          <p><strong>Domingos:</strong> 11h às 22h</p>
        </div>
      </div>

      <div style={styles.formSection}>
        <h2 style={styles.subtitulo}>📧 Envie uma Mensagem</h2>
        <form style={styles.form}>
          <input 
            type="text" 
            placeholder="Seu nome" 
            style={styles.input}
          />
          <input 
            type="email" 
            placeholder="Seu e-mail" 
            style={styles.input}
          />
          <textarea 
            placeholder="Sua mensagem..." 
            rows="5"
            style={styles.textarea}
          ></textarea>
          <button type="submit" style={styles.botaoEnviar}>
            📤 Enviar Mensagem
          </button>
        </form>
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
  contatosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '3rem'
  },
  cardContato: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  formSection: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  subtitulo: {
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '1.5rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  input: {
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem'
  },
  textarea: {
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    resize: 'vertical'
  },
  botaoEnviar: {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1.1rem'
  }
};

// REMOVER completamente esta linha:
// export default Contatos;