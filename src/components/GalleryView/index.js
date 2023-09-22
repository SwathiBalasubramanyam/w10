import { useParams } from "react-router-dom";

const GalleryView = ({galleries}) => {
    const {galleryId} = useParams();

    const gallery = galleries.find((gallery) => 
        gallery.gallerynumber === galleryId
    )

    return (
        <h1>Hello from {`${gallery.name}`}</h1>
    )
}

export default GalleryView