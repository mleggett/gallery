import Images from './components/Images'
import thumbnails_data from './data/thumbnails'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Gallery</h1>
       <Images data={thumbnails_data} />
      </header>
    </div>
  );
}

export default App;
