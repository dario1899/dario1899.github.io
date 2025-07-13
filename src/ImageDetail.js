import { useParams, useNavigate } from 'react-router-dom';

function ImageDetail() {
  const { imageName, fileName } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>
          Wybrales: {fileName}
        </h1>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>
          {fileName === 'becs.jpeg' ? `${fileName} wybrało 12 osób (1,28% głosujących)` : 
           fileName === 'ronaldo-gruby.jpg' ? `${fileName} wybrało 14567 osób (98,72% głosujących)` : 
           'Unknown image'}
        </h2>
        <button 
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ImageDetail; 