const Loader = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
      flexDirection: 'column',
      color: '#ffffff'
    }}>
      <div style={{
        border: '4px solid rgba(0, 212, 255, 0.3)',
        borderTop: '4px solid #00d4ff',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        animation: 'spin 1s linear infinite',
        marginBottom: '20px',
        boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)'
      }}></div>
      <p>Loading users...</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;