// App.js
import React from 'react';
import NavBar from './components/NavBar'; // Ajusta la ruta según tu estructura
import ItemListContainer from './components/ItemListContainer'; // Ajusta la ruta según tu estructura

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
        </div>
    );
};

export default App;
