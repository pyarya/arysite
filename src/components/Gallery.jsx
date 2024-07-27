import { useState } from 'preact/hooks';
import '../styles/gallery.css';

const images = [
    { src: '../../images/art/IMG_4522.DNG', description: 'Description for Image 1' },
    { src: '../../images/art/IMG_4521.DNG', description: 'Description for Image 2' },
    { src: '../../images/art/IMG_4548.jpg', description: 'Description for Image 1' },
    { src: '../../images/art/IMG_4551.jpg', description: 'Description for Image 2' },

  // Add more images as needed
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    e.stopPropagation();
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img
            src={image.src}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(image)}
          />
        </div>
      ))}

      {selectedImage && (
        <div className="popup" onClick={() => setSelectedImage(null)}>
          <div className="popup-content" onClick={handleClosePopup}>
            <img src={selectedImage.src} alt="Selected" />
            <p>{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
