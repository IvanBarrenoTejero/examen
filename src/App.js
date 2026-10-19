import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-400">Hola, Iván</h1>

      <p className="mt-4 text-white text-lg">
        Mi primer proyecto con Tailwind CSS
      </p>

      <button className="mt-6 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
        Pulsar
      </button>
    </div>
  );
}

export default App;
