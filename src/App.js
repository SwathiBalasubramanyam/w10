import harvardArt from "./data/harvardArt.js" 
import GalleryNavigation from "./components/GalleryNavigation/index.js";

function App() {
  return (
    <>
    <h1>Hello from App</h1>
    <GalleryNavigation galleries={harvardArt.records}/>
    </>
  );
}

export default App;
