import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ImageDetail from './ImageDetail';
import becsImage from './img/becs.jpeg';
import ronaldoImage from './img/ronaldo-gruby.jpg';


function HomePage() {
  const [images, setImages] = useState({
    image1: '',
    image2: '',
    image3: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      
      // Replace with your actual backend API endpoints
      const imageUrls = [
        'http://localhost:8080/api/v1/elevation/first-image', // Replace with your API endpoint
        'http://localhost:8080/api/v1/elevation/second-image', // Replace with your API endpoint  
        // 'https://picsum.photos/400/300?random=3'  // Replace with your API endpoint
      ];

      // If you have a single API endpoint that returns multiple images:
      // const response = await fetch('your-backend-api/images');
      // const data = await response.json();
      // setImages({
      //   image1: data.image1,
      //   image2: data.image2, 
      //   image3: data.image3
      // });

      // For now, using placeholder images - replace with your actual API calls
      setImages({
        // image1: imageUrls[0],
        // image2: imageUrls[1],
        image1: becsImage,
        image2: ronaldoImage,
        // image3: imageUrls[2]
      });

      setLoading(false);
    } catch (err) {
      setError('Failed to fetch images');
      setLoading(false);
      console.error('Error fetching images:', err);
    }
  };

  const handleImageClick = (imageName, fileName) => {
    navigate(`/image/${imageName}/${fileName}`);
  };

  if (loading) {
    return (
      <div className="App">
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
          <p>Loading images...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
          <p style={{color: "red"}}>{error}</p>
          <button onClick={fetchImages} style={{marginLeft: "10px"}}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div style={{display: "flex", gap: "20px"}}>
        <button 
          onClick={() => handleImageClick('image1', 'becs.jpeg')}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            width: '50%',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          <img 
            src={images.image1} 
            className="App-logo" 
            alt="Image 1" 
            style={{width: "100%"}} 
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=Image+1+Failed';
            }}
          />
        </button>
        <button 
          onClick={() => handleImageClick('image2', 'ronaldo-gruby.jpg')}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            width: '50%',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          <img 
            src={images.image2} 
            className="App-logo" 
            alt="Image 2" 
            style={{width: "100%"}} 
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=Image+2+Failed';
            }}
          />
        </button>
      </div>
      <header className="App-header">
        Versusy v 0.0.0.0.1
        {/* <button 
          onClick={() => handleImageClick('image3')}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        > */}
          {/* <img 
            src={images.image3} 
            className="App-logo" 
            alt="Image 3" 
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=Image+3+Failed';
            }}
          />  */}
        {/* </button> */}
        <p>
          {/* Edit - <code>src/App.js</code> and save to reload. */}
          13.07.2025
        </p>
        <p>
          test
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/image/:imageName/:fileName" element={<ImageDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
