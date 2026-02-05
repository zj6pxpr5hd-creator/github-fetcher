import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Body from './components/Body'

function App() {
  
  return (
    <div className="app-container">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header>
        <Header />
      </header>
      <main id="main-content">
        <Body />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App
