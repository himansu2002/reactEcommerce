import React from 'react';
import '/src/css/Products.css'; 

// Define image URLs
const images = [
  '/images/images-removebg-preview.png',
  '/images/images1-removebg-preview.png',
  '/images/images2-removebg-preview.png',
  '/images/images3-removebg-preview.png',
  '/images/images4-removebg-preview.png',
  '/images/images5-removebg-preview.png',
];

const texts = [
  ' Arnica montana is a homeopathic remedy commonly used to treat bruises, muscle aches, and sprains, believed to reduce inflammation and promote healing.',
  ' Aftabs Immunity Tablets are a dietary supplement that may help boost the immune system.',
  ' Dr. Batras Immunity Tablets are a homeopathic remedy designed to support the immune system.',
  ' Aesculus Pentarkan is a homeopathic medicine used for the treatment of hemorrhoids and venous circulation disorders.',
  ' Hydronil is a medication used to treat fluid retention (edema) associated with certain medical conditions.',
  ' Nerophos Tablets are a supplement containing phosphorus and other ingredients, claimed to support nerve health and cognitive function.'
  
];

const titles =['Arnica montana ',
'Aftabs Immunity Tablets ',
' Dr. Batras Immunity Tablets',
'Aesculus Pentarkan ',
'Hydronil ',
'Nerophos Tablets '
];

const Products = () => {
  return (
    
    <section className="container">
      <div className="slider-wrapper">
        <div className="slider">
          {images.map((imageUrl, index) => (
            <div key={index} id={`slide-${index + 1}`} className="slide">
              <p className='title'>{titles[index]}</p>
              <p className='description'>{texts[index]} </p>
              <img src={imageUrl} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="slider-nav">
          {images.map((_, index) => (
            <a key={index} href={`#slide-${index + 1}`}></a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;