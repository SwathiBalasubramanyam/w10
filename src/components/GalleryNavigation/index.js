import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

import "./GalleryNavigation.css";

const GalleryNavigation = ({galleries}) => {
    const galleriesMapped = galleries.map(gallery => {
        return (
            <NavLink to={`/galleries/${gallery.id}`} key={gallery.id} activeClassName="banana">
                {gallery.name}
            </NavLink>
        )
    });

    return (
        <nav>
            <h1><NavLink to="/">Galleries</NavLink></h1>
            {galleriesMapped}
        </nav>
    )
}

export default GalleryNavigation