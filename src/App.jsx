import './App.css'
import Header from './components/Header';
import Card from './components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([]);

  const productsAxios = async () => {
    await axios.get('http://localhost:3000/Products')
      .then((res) => setProducts(res.data))
  }

  useEffect(() => {
    productsAxios();
  })

  return (
    <div>
      <Header />
      <Card products={products} />
    </div>
  )
}

export default App;