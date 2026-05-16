import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Landing from './pages/Landing';
import Products from './pages/Products';
import Bag from './pages/Bag';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Landing />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Bag />} />
        {/* Future e-commerce routes will go here */}
      </Route>
    </Routes>
  );
}

export default App;
