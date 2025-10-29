import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/CartItem';

export function Pedidos() {
  const { carrinho, totalCarrinho, limparCarrinho, totalItens } = useCart();
  const [etapa, setEtapa] = useState('carrinho'); // 'carrinho', 'entrega', 'pagamento', 'confirmacao'
  const [dadosEntrega, setDadosEntrega] = useState({
    nome: '',
    endereco: '',
    telefone: '',
    observacoes: ''
  });
  const [metodoPagamento, setMetodoPagamento] = useState('cartao');

  const taxaEntrega = 8.00;
  const totalPedido = totalCarrinho + taxaEntrega;

  // Funções de navegação
  const irParaEntrega = () => setEtapa('entrega');
  const irParaPagamento = () => setEtapa('pagamento');
  const voltarParaCarrinho = () => setEtapa('carrinho');
  const voltarParaEntrega = () => setEtapa('entrega');
  
  const finalizarPedido = () => {
    setEtapa('confirmacao');
  };

  const pedidoConfirmado = () => {
    alert('🎉 Pedido confirmado! Obrigado pela compra!');
    limparCarrinho();
    setEtapa('carrinho');
    setDadosEntrega({ nome: '', endereco: '', telefone: '', observacoes: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDadosEntrega(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Componente do Carrinho
  const Carrinho = () => (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.titulo}>🛒 Meu Pedido</h1>
        <div style={styles.infoCarrinho}>
          <span>{totalItens} {totalItens === 1 ? 'item' : 'itens'}</span>
        </div>
      </div>
      
      <div style={styles.itensCarrinho}>
        {carrinho.map((item, index) => (
          <CartItem key={`${item.id}-${index}`} item={item} />
        ))}
      </div>

      <div style={styles.resumoPedido}>
        <h3 style={styles.resumoTitle}>📋 Resumo do Pedido</h3>
        
        <div style={styles.linhaResumo}>
          <span>Subtotal ({totalItens} itens):</span>
          <span>R$ {totalCarrinho.toFixed(2)}</span>
        </div>
        
        <div style={styles.linhaResumo}>
          <span>Taxa de entrega:</span>
          <span>R$ {taxaEntrega.toFixed(2)}</span>
        </div>
        
        <div style={{...styles.linhaResumo, ...styles.total}}>
          <strong>Total do pedido:</strong>
          <strong>R$ {totalPedido.toFixed(2)}</strong>
        </div>
        
        <div style={styles.botoesAcao}>
          <button 
            style={styles.botaoLimpar}
            onClick={limparCarrinho}
          >
            🗑️ Limpar Carrinho
          </button>
          
          <button 
            style={styles.botaoContinuar}
            onClick={irParaEntrega}
            disabled={carrinho.length === 0}
          >
            🚚 Continuar para Entrega
          </button>
        </div>

        <div style={styles.observacao}>
          <p>⏰ Tempo de entrega: 45 minutos</p>
          <p>💳 Aceitamos cartão, PIX e dinheiro</p>
        </div>
      </div>
    </div>
  );

  // Componente de Entrega
  const Entrega = () => (
    <div style={styles.etapaContainer}>
      <div style={styles.etapaHeader}>
        <button style={styles.botaoVoltar} onClick={voltarParaCarrinho}>
          ← Voltar
        </button>
        <h2 style={styles.etapaTitulo}>🚚 Informações de Entrega</h2>
        <div style={styles.etapaProgresso}>
          <div style={styles.passoAtivo}>1</div>
          <div style={styles.passo}>2</div>
          <div style={styles.passo}>3</div>
        </div>
      </div>

      <div style={styles.formContainer}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Nome completo *</label>
          <input 
            type="text" 
            name="nome"
            value={dadosEntrega.nome}
            onChange={handleInputChange}
            style={styles.input} 
            placeholder="Seu nome completo" 
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Endereço completo *</label>
          <input 
            type="text" 
            name="endereco"
            value={dadosEntrega.endereco}
            onChange={handleInputChange}
            style={styles.input} 
            placeholder="Rua, número, bairro, complemento" 
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Telefone *</label>
          <input 
            type="tel" 
            name="telefone"
            value={dadosEntrega.telefone}
            onChange={handleInputChange}
            style={styles.input} 
            placeholder="(11) 99999-9999" 
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Observações</label>
          <textarea 
            name="observacoes"
            value={dadosEntrega.observacoes}
            onChange={handleInputChange}
            style={styles.textarea} 
            placeholder="Alguma observação para a entrega? Ponto de referência, etc."
            rows="3"
          />
        </div>

        <button 
          style={styles.botaoPrincipal}
          onClick={irParaPagamento}
          disabled={!dadosEntrega.nome || !dadosEntrega.endereco || !dadosEntrega.telefone}
        >
          💳 Continuar para Pagamento
        </button>
      </div>
    </div>
  );

  // Componente de Pagamento
  const Pagamento = () => (
    <div style={styles.etapaContainer}>
      <div style={styles.etapaHeader}>
        <button style={styles.botaoVoltar} onClick={voltarParaEntrega}>
          ← Voltar
        </button>
        <h2 style={styles.etapaTitulo}>💳 Forma de Pagamento</h2>
        <div style={styles.etapaProgresso}>
          <div style={styles.passoConcluido}>✓</div>
          <div style={styles.passoAtivo}>2</div>
          <div style={styles.passo}>3</div>
        </div>
      </div>

      <div style={styles.formContainer}>
        <div style={styles.opcoesPagamento}>
          <label style={{
            ...styles.opcaoPagamento,
            ...(metodoPagamento === 'cartao' && styles.opcaoSelecionada)
          }}>
            <input 
              type="radio" 
              name="pagamento" 
              value="cartao" 
              checked={metodoPagamento === 'cartao'}
              onChange={(e) => setMetodoPagamento(e.target.value)}
            />
            <span>💳 Cartão de Crédito/Débito</span>
          </label>

          <label style={{
            ...styles.opcaoPagamento,
            ...(metodoPagamento === 'pix' && styles.opcaoSelecionada)
          }}>
            <input 
              type="radio" 
              name="pagamento" 
              value="pix" 
              checked={metodoPagamento === 'pix'}
              onChange={(e) => setMetodoPagamento(e.target.value)}
            />
            <span>📱 PIX</span>
          </label>

          <label style={{
            ...styles.opcaoPagamento,
            ...(metodoPagamento === 'dinheiro' && styles.opcaoSelecionada)
          }}>
            <input 
              type="radio" 
              name="pagamento" 
              value="dinheiro" 
              checked={metodoPagamento === 'dinheiro'}
              onChange={(e) => setMetodoPagamento(e.target.value)}
            />
            <span>💵 Dinheiro</span>
          </label>
        </div>

        {/* Formulário do Cartão */}
        {metodoPagamento === 'cartao' && (
          <div style={styles.formaPagamentoDetalhes}>
            <h4>Informações do Cartão</h4>
            <div style={styles.formGroup}>
              <label style={styles.label}>Número do Cartão</label>
              <input type="text" style={styles.input} placeholder="0000 0000 0000 0000" />
            </div>
            <div style={styles.grid2Colunas}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Validade</label>
                <input type="text" style={styles.input} placeholder="MM/AA" />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>CVV</label>
                <input type="text" style={styles.input} placeholder="123" />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Nome no Cartão</label>
              <input type="text" style={styles.input} placeholder="Como está no cartão" />
            </div>
          </div>
        )}

        {/* QR Code PIX */}
        {metodoPagamento === 'pix' && (
          <div style={styles.formaPagamentoDetalhes}>
            <h4>Pagamento via PIX</h4>
            <div style={styles.pixContainer}>
              <div style={styles.qrCode}>
                <div style={styles.qrCodePlaceholder}>
                  [QR CODE PIX]
                </div>
              </div>
              <p style={styles.chavePix}>
                <strong>Chave PIX:</strong> contato@saborearte.com
              </p>
              <p style={styles.instrucoesPix}>
                1. Abra seu app do banco<br/>
                2. Escaneie o QR Code<br/>
                3. Confirme o pagamento
              </p>
            </div>
          </div>
        )}

        {/* Pagamento em Dinheiro */}
        {metodoPagamento === 'dinheiro' && (
          <div style={styles.formaPagamentoDetalhes}>
            <h4>Pagamento em Dinheiro</h4>
            <p>💰 Prepare o troco para: R$ {totalPedido.toFixed(2)}</p>
            <p style={styles.observacaoDinheiro}>
              O entregador levará troco para notas de R$ 20,00 e R$ 50,00
            </p>
          </div>
        )}

        <button 
          style={styles.botaoPrincipal}
          onClick={finalizarPedido}
        >
          ✅ Finalizar Pedido
        </button>
      </div>
    </div>
  );

  // Componente de Confirmação
  const Confirmacao = () => (
    <div style={styles.etapaContainer}>
      <div style={styles.etapaHeader}>
        <h2 style={styles.etapaTitulo}>✅ Pedido Confirmado!</h2>
        <div style={styles.etapaProgresso}>
          <div style={styles.passoConcluido}>✓</div>
          <div style={styles.passoConcluido}>✓</div>
          <div style={styles.passoConcluido}>✓</div>
        </div>
      </div>

      <div style={styles.confirmacaoContainer}>
        <div style={styles.iconSuccess}>🎉</div>
        <h3 style={styles.confirmacaoTitulo}>Pedido realizado com sucesso!</h3>
        
        <div style={styles.resumoFinal}>
          <h4>📦 Resumo do Pedido</h4>
          <div style={styles.detalhesPedido}>
            <p><strong>Nome:</strong> {dadosEntrega.nome}</p>
            <p><strong>Endereço:</strong> {dadosEntrega.endereco}</p>
            <p><strong>Telefone:</strong> {dadosEntrega.telefone}</p>
            <p><strong>Pagamento:</strong> {
              metodoPagamento === 'cartao' ? 'Cartão' : 
              metodoPagamento === 'pix' ? 'PIX' : 'Dinheiro'
            }</p>
            <p><strong>Total:</strong> R$ {totalPedido.toFixed(2)}</p>
          </div>
        </div>

        <div style={styles.infoEntrega}>
          <h4>🚚 Informações de Entrega</h4>
          <p>⏰ <strong>Tempo estimado:</strong> 45 minutos</p>
          <p>📞 <strong>Dúvidas?</strong> (11) 9999-9999</p>
        </div>

        <button 
          style={styles.botaoPrincipal}
          onClick={pedidoConfirmado}
        >
          🏠 Fazer Novo Pedido
        </button>
      </div>
    </div>
  );

  // Renderização condicional
  if (carrinho.length === 0 && etapa === 'carrinho') {
    return (
      <div style={styles.carrinhoVazio}>
        <h1>🛒 Meu Carrinho</h1>
        <div style={styles.vazioContent}>
          <p style={styles.vazioTexto}>Seu carrinho está vazio</p>
          <p style={styles.vazioSubtitulo}>Adicione alguns itens deliciosos do nosso cardápio!</p>
        </div>
      </div>
    );
  }

  switch (etapa) {
    case 'entrega':
      return <Entrega />;
    case 'pagamento':
      return <Pagamento />;
    case 'confirmacao':
      return <Confirmacao />;
    default:
      return <Carrinho />;
  }
}

const styles = {
  // Estilos base (mantenha os mesmos do código anterior)
  container: {
    padding: '1rem',
    maxWidth: '800px',
    margin: '0 auto',
    minHeight: '60vh'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  titulo: {
    color: '#2c3e50',
    fontSize: '2.5rem',
    margin: 0
  },
  infoCarrinho: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontWeight: 'bold'
  },
  carrinhoVazio: {
    textAlign: 'center',
    padding: '4rem 2rem',
    color: '#7f8c8d',
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  vazioContent: {
    maxWidth: '400px'
  },
  vazioTexto: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  vazioSubtitulo: {
    fontSize: '1rem',
    marginBottom: '2rem',
    color: '#7f8c8d'
  },
  itensCarrinho: {
    marginBottom: '2rem'
  },
  resumoPedido: {
    backgroundColor: '#f8f9fa',
    padding: '2rem',
    borderRadius: '12px',
    border: '1px solid #e9ecef',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  resumoTitle: {
    marginTop: 0,
    marginBottom: '1.5rem',
    color: '#2c3e50',
    textAlign: 'center',
    fontSize: '1.5rem'
  },
  linhaResumo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #dee2e6',
    fontSize: '1.1rem'
  },
  total: {
    borderBottom: 'none',
    fontSize: '1.3rem',
    color: '#2c3e50',
    paddingTop: '0.5rem',
    borderTop: '2px solid #dee2e6'
  },
  botoesAcao: {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',
    flexWrap: 'wrap'
  },
  botaoLimpar: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    flex: 1,
    minWidth: '150px'
  },
  botaoContinuar: {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    flex: 2,
    minWidth: '200px'
  },
  observacao: {
    marginTop: '1.5rem',
    paddingTop: '1rem',
    borderTop: '1px solid #dee2e6',
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: '0.9rem'
  },

  // Novos estilos para as etapas
  etapaContainer: {
    padding: '1rem',
    maxWidth: '600px',
    margin: '0 auto',
    minHeight: '80vh'
  },
  etapaHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  botaoVoltar: {
    backgroundColor: 'transparent',
    border: '1px solid #ddd',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem'
  },
  etapaTitulo: {
    color: '#2c3e50',
    margin: 0,
    textAlign: 'center',
    flex: 1
  },
  etapaProgresso: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
  },
  passo: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#ecf0f1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: 'bold'
  },
  passoAtivo: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#3498db',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: 'bold'
  },
  passoConcluido: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#27ae60',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: 'bold'
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  formGroup: {
    marginBottom: '1.5rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#2c3e50'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '1rem',
    boxSizing: 'border-box'
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '1rem',
    resize: 'vertical',
    boxSizing: 'border-box',
    minHeight: '80px'
  },
  botaoPrincipal: {
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    width: '100%',
    marginTop: '1rem'
  },
  opcoesPagamento: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '2rem'
  },
  opcaoPagamento: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    border: '2px solid #ecf0f1',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  opcaoSelecionada: {
    borderColor: '#3498db',
    backgroundColor: '#ebf5fb'
  },
  formaPagamentoDetalhes: {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '1.5rem'
  },
  grid2Colunas: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem'
  },
  pixContainer: {
    textAlign: 'center'
  },
  qrCode: {
    margin: '1rem 0'
  },
  qrCodePlaceholder: {
    width: '200px',
    height: '200px',
    backgroundColor: '#ecf0f1',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    color: '#7f8c8d',
    fontSize: '0.9rem'
  },
  chavePix: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
    wordBreak: 'break-all',
    margin: '1rem 0'
  },
  instrucoesPix: {
    fontSize: '0.8rem',
    color: '#7f8c8d',
    lineHeight: '1.4'
  },
  observacaoDinheiro: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
    fontStyle: 'italic'
  },
  confirmacaoContainer: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  iconSuccess: {
    fontSize: '4rem',
    marginBottom: '1rem'
  },
  confirmacaoTitulo: {
    color: '#27ae60',
    marginBottom: '2rem'
  },
  resumoFinal: {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '1.5rem',
    textAlign: 'left'
  },
  detalhesPedido: {
    lineHeight: '1.6'
  },
  infoEntrega: {
    backgroundColor: '#e8f6f3',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '1.5rem'
  }
};