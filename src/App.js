import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/globalContext';
import Layout from './layout/Layout';
import ItemListMain from './components/ItemListContainer/ItemListMain';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import NotFound from './pages/NotFound/NotFound';

import './styles/index.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route index element={ <ItemListMain /> } />
            <Route path='categoria/:categoryId' element={ <ItemListMain /> } />
            <Route path='productos/:productId' element={ <ItemDetailContainer /> } />
            <Route path='cart' element={ <Cart /> } />
            <Route path='checkout' element={ <Checkout /> } />
            <Route path='*' element={ <NotFound /> } />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
