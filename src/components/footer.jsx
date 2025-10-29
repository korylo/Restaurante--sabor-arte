import React from 'react';

export function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.coluna}>
          <h3 style={styles.titulo}>🍕 Restaurante Sabor & Arte</h3>
          <p>📍 Rua das Flores, 123 - Centro</p>
          <p>São Paulo - SP</p>
          <p>📞 (11) 9999-9999</p>
          <p>📧 contato@saborearte.com</p>
        </div>
        
        <div style={styles.coluna}>
          <h4 style={styles.titulo}>🕒 Horário de Funcionamento</h4>
          <p>Segunda a Sexta: 11h às 23h</p>
          <p>Sábado: 11h às 00h</p>
          <p>Domingo: 11h às 22h</p>
        </div>
        
        <div style={styles.coluna}>
          <h4 style={styles.titulo}>💳 Formas de Pagamento</h4>
          <p>Cartão de Crédito/Débito</p>
          <p>Dinheiro</p>
          <p>PIX</p>
          <p>iFood</p>
        </div>
      </div>
      
      <div style={styles.copyright}>
        <p>© 2024 Restaurante Sabor & Arte - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#34495e',
    color: 'white',
    padding: '2rem 1rem',
    marginTop: 'auto'
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  coluna: {
    textAlign: 'center'
  },
  titulo: {
    marginBottom: '1rem',
    color: '#ecf0f1'
  },
  copyright: {
    textAlign: 'center',
    marginTop: '2rem',
    paddingTop: '1rem',
    borderTop: '1px solid #7f8c8d',
    color: '#bdc3c7'
  }
};