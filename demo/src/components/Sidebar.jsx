import { useState, useEffect } from "react"; 
import axios from "axios";

export default function Sidebar() {
  const [fact, setFact] = useState(""); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const getFact = async () => {
      try {
        const res = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
        setFact(res.data.text);  
        setLoading(false);        
      } catch (error) {
        console.error("Error fetching fact:", error);
        setLoading(false); 
      }
    };

    getFact(); 
  }, []); 

  return (
    <div className="min-h-screen flex justify-center items-center bg-pink-100"> {/* Fondo rosado que ocupa toda la pantalla */}
      <div className="bg-pink-500 text-white p-8 rounded-xl shadow-lg w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 text-center"> {/* Contenedor responsivo */}
        <div className="text-center mb-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Random Fact</h1> {/* Título más grande, ajustado para pantallas pequeñas */}
        </div>
        <div className="mb-6">
          {loading ? (
            <div>Loading...</div> // Muestra "Loading..." mientras se obtiene el hecho
          ) : (
            <div className="bg-pink-700 p-4 rounded-md">
              <p>{fact}</p> {/* Muestra el hecho aleatorio */}
            </div>
          )}
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-pink-600 px-6 py-3 rounded-md hover:bg-pink-700">
            Like
          </button>
          <button className="bg-pink-600 px-6 py-3 rounded-md hover:bg-pink-700">
            Dislike
          </button>
        </div>
        <div className="mt-4">
          <button
            onClick={() => setLoading(true)} // Esto recarga el hecho aleatorio
            className="bg-pink-600 px-6 py-3 rounded-md hover:bg-pink-700"
          >
            Load Another Fact
          </button>
        </div>
      </div>
    </div>
  );
}
