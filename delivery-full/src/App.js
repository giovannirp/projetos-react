import './App.scss';
import Header from './Components/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
