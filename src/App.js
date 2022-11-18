import './styles/App.css';
import Model from './components/Model';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="max-h-screen min-w-full">
      <div 
        className="flex flex-col items-center justify-center rounded shadow-md overflow-hidden max-w-xl mx-auto my-10"
      >
        <Model />
        {/* <section className="attribution">
          <span>
            <h1>Astronaut</h1>
            <span>By <a href="https://poly.google.com/view/dLHpzNdygsg" target="_blank" rel="noreferrer">Poly</a></span>
          </span>
          <a className="cc" href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noreferrer">
            <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt=''/>
            <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt=''/>
          </a>
        </section> */}
      </div>
      <Footer />
    </div>
  );
}
