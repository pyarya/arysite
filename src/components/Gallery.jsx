import { useEffect, useState } from 'preact/hooks';
// Adjust the path as necessary
import '../styles/gallery.css';

const ImageGrid = ({ images }) => {
  const imageClasses = [
    'div1', 'div2', 'div3', 'div4', 'div5',
    'div6', 'div7', 'div8', 'div9', 'div10',
    'div11', 'div12',  'div13', 'div14', 'div15',
    'div16', 'div17', 'div18', 'div19', 'div20',
    'div21', 'div22', 'div23', 'div24',
  ];

  return (
    <div className="parent">
      {images.slice(0, 24).map((image, index) => (
        <div className={imageClasses[index]} key={index}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
