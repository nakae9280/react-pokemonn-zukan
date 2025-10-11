import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PokemonList from './pages/PokemonList.tsx';
import PokemonDetail from './pages/PokemonDetail.tsx';
import Header from './components/header.tsx';
import Navigation from './components/Navigation.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;


