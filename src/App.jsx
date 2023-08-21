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

  const [count, setCount] = useState(0);

  const handleCounter = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <Header count={count} />
      <Card products={products} handleCounter={handleCounter} />
    </div>
  )
}

export default App;