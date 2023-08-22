import './App.css'
import Header from './components/Header';
import Card from './components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([]);

  const productsAxios = async () => {
    try {
      await axios.get('http://localhost:3000/Products')
        .then((res) => setProducts(res.data))
    } catch (error) {
      console.error('Error productsAxios:', error);
    }
  }

  useEffect(() => {
    productsAxios();
  }, [])


  const handleCounter = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, count: (product.count || 0) + 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  const totalItemCount = products.reduce((total, product) => total + (product.count || 0), 0);

  return (
    <div className='App'>
      <Header products={products} totalItemCount={totalItemCount} />
      <Card products={products} handleCounter={handleCounter} />
    </div>
  )
}

export default App;