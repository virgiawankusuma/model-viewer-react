import './styles/App.css';
import Model from './components/Model';

export default function App() {
  return (
    <>
      <div id="card">
        <Model />
        <section className="attribution">
          <span>
            <h1>Astronaut</h1>
            <span>By <a href="https://poly.google.com/view/dLHpzNdygsg" target="_blank" rel="noreferrer">Poly</a></span>
          </span>
          <a className="cc" href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noreferrer">
            <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt=''/>
            <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt=''/>
          </a>
        </section>
      </div>
      <footer>
        <span>This page is a basic demo of the <a href="https://github.com/GoogleWebComponents/model-viewer" target="_blank" rel="noreferrer">&lt;model-viewer&gt;</a> web component.</span>
        <span>It makes displaying 3D and AR content on the web easy ✌️</span>
        <a href="https://glitch.com/edit/#!/remix/model-viewer">
          <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726" alt="remix button" aria-label="remix" height="33" />
        </a>
      </footer>
    </>
  );
}
