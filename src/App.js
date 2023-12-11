import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import ItemListMain from './components/ItemListContainer/ItemListMain';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

import './styles/index.css';
import './styles/App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <ItemListMain /> } />
          <Route path='categoria/:categoryId' element={ <ItemListMain /> } />
          <Route path='productos/:productId' element={ <ItemDetailContainer /> } />
          <Route path='*' element={ <NotFound /> } />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
