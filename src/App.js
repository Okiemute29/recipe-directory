import { BrowserRouter, Route, Routes } from 'react-router-dom';

// COmponent 
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Home from './pages/home/Home';
import Create from './pages/create/create';
import Navbar from './component/Navbar';
import ThemeSelector from './component/ThemeSelector';

// Style 
import './App.css'
import { useTheme } from './hooks/useTheme';

function App() {
  const {mode} = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/create' element={<Create />} />
          <Route path='/recipes/:id' element={<Recipe />} />
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App
