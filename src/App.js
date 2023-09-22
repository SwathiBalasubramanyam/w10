import harvardArt from "./data/harvardArt.js" 
import GalleryNavigation from "./components/GalleryNavigation/index.js";
import GalleryView from "./components/GalleryView/index.js";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
    <h1>Hello from App</h1>
    <GalleryNavigation galleries={harvardArt.records}/>
    <Route path="/galleries/:galleryId">
      <GalleryView galleries={harvardArt.records}/>
    </Route>
    </div>
  );
}

export default App;
