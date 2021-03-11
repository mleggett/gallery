import Images from './components/Images'
import image_data from './data/image_data'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Gallery</h1>
       <Images data={image_data} />
      </header>
    </div>
  );
}

export default App;
