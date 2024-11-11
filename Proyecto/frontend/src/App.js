import './App.css';
import Header from './Header';
import Footer from './Footer';
 
function App() {
  return (
    <div className="App">
      <Header />
            
        <main style={{ padding: '20px', minHeight: '100vh' }}>
          <h2>Bienvenido a mi sitio web</h2>
          <p>Esta es la sección principal de contenido.</p>
        </main>
        
      <Footer />
    </div>
  );
}

export default App;
