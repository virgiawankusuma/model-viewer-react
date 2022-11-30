import './styles/App.css';
import Model from './components/Model';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="max-h-screen min-w-full">
      <div 
        className="flex flex-col items-center justify-center rounded shadow-xl shadow-secondary/30 overflow-hidden max-w-xl mx-auto my-10"
      >
        <Model />
        <Footer />
      </div>
    </div>
  );
}
