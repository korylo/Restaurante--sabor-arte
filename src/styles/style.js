cat > src/styles.js << 'EOF'
export const styles = {
  container: { maxWidth: '400px', margin: '0 auto', background: '#f5f5f5', minHeight: '100vh', fontFamily: 'Arial, sans-serif' },
  header: { background: '#fff', padding: '20px', textAlign: 'center', borderBottom: '1px solid #eee' },
  abas: { display: 'flex', background: '#fff', borderBottom: '1px solid #eee' },
  aba: { flex: 1, padding: '15px', textAlign: 'center', background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer', borderBottom: '3px solid transparent' },
  abaAtiva: { borderBottom: '3px solid #e74c3c', color: '#e74c3c', fontWeight: 'bold' },
  conteudo: { padding: '20px' },
  formContainer: { background: '#fff', borderRadius: '10px', padding: '20px', marginBottom: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' },
  formTitulo: { margin: '0 0 15px 0', fontSize: '18px', color: '#333', fontWeight: 'bold' },
  inputGroup: { marginBottom: '15px' },
  label: { display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333', fontSize: '14px' },
  input: { width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' },
  btnSalvar: { background: '#3498db', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', width: '100%' },
  btnRemover: { background: '#e74c3c', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer', fontSize: '12px', marginLeft: '10px' },
  listaItem: { background: '#f8f9fa', padding: '15px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #e9ecef' },
  switchContainer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' },
  switch: { position: 'relative', display: 'inline-block', width: '50px', height: '24px' },
  switchInput: { opacity: 0, width: 0, height: 0 },
  slider: { position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#ccc', transition: '.4s', borderRadius: '24px' },
  sliderOn: { backgroundColor: '#2196F3' },
  sliderKnob: { position: 'absolute', content: '""', height: '16px', width: '16px', left: '4px', bottom: '4px', backgroundColor: 'white', transition: '.4s', borderRadius: '50%' },
  sliderKnobOn: { transform: 'translateX(26px)' }
};
EOF