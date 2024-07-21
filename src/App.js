import './App.css';
import { useState } from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ProductList } from './ProductList';

function App() {
  const products = [
    {
      id:1,
      name: 'Fancy',
      price: '$45',
    },
    {id:2,
      name: 'Jeans',
      price: '$9',
    },
    {id:3,
      name: 'Shirts',
      price: '$49',
    },
    {id:4,
      planType: 'kurthi',
      price: '$67',
    },
    {
      id:5,
      planType: 'pyjama',
      price: '$87',
    },
    { id:6,
      planType: 'Trousers',
      price: '$78',
    },
    { id:7,
      planType: 'Shorts',
      price: '$75',
    },
    { id:8,
      planType: 'Coat',
      price: '$112',
    }
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCart(cart.filter(product => product.id !== productToRemove.id));
  };
  



  return (
    <>
    <Navigation cartLength={cart.length}/>
     <Header />
      <ProductList  products={products} cart={cart}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}/>
     <Footer />
    </>
    
  );
}

export default App;
