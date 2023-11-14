import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


import './styles/index.css';
import './styles/App.css';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer
          greeting="Hola, Bienvenido a TodoFútbol!"
        />
      </main>
    </>
  );
}

export default App;
