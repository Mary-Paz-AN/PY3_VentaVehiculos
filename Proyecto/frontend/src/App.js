import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel, Button } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import { AuthProvider } from './Usuario/AuthContext';
import { useTranslation } from 'react-i18next';
 
function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <AuthProvider>
        <Header />
          <Carousel className="custom-carousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/Carrusel1.png"
                alt="Primera Imagen"
              />
              <Carousel.Caption className="carousel-caption-custom">
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/Carrusel2.png"
                alt="Segunda Imagen"
              />
              <Carousel.Caption className="carousel-caption-custom">
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/Carrusel3.png"
                alt="Tercera Imagen"
              />
              <Carousel.Caption className="carousel-caption-custom">
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
