import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default class Slide extends React.Component {

    render () {
        const images = [
            {
              original: 'img/casa1.png',
              thumbnail: 'img/casa1.png',
            },
            {
                original: 'img/casa2.png',
                thumbnail: 'img/casa2.png',
              },
              {
                original: 'img/casa3.png',
                thumbnail: 'img/casa3.png',
              },
            ]
                  return <ImageGallery items={images} />;
                
                }
              }
              
    
