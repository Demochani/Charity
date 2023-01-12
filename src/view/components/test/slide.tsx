import React, { MouseEventHandler } from "react";

import "./style.css";


const Gallery = () => {
    const images = [...document.querySelectorAll('.image')] as HTMLImageElement[];

// popup

const popup = document.querySelector('.popup') as HTMLElement;
const closeBtn = document.querySelector('.close-btn') as HTMLElement;
const imageName = document.querySelector('.image-name') as HTMLElement;
const largeImage = document.querySelector('.large-image') as HTMLImageElement;
const imageIndex = document.querySelector('.index') as HTMLElement;
const leftArrow = document.querySelector('.left-arrow') as HTMLElement;
const rightArrow = document.querySelector('.right-arrow') as HTMLElement;

let index = 0; // will track our current image;

images.forEach((item:HTMLElement, i:number) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i:number) => {
    const path = `img/img${i+1}.png`;

    largeImage.src = path;
    imageName.textContent = path;
    imageIndex.textContent = `0${i+1}`;
    index = i;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if (index > 0){
        updateImage(index - 1);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        updateImage(index + 1);
    }
})

  return (
    <>
    <div className="popup">
        <div className="top-bar">
            <p className="image-name">img1.png</p>
            <span className="close-btn"></span>
        </div>
        <button className="arrow-btn left-arrow">
            <img src="img/arrow.png" alt="left arrow"/>
        </button>
        <button className="arrow-btn right-arrow"><img src="img/arrow.png" alt=""/></button>
        <img src="img/img1.png" className="large-image" alt=""/>
        <h1 className="index">01</h1>
    </div>

    <div className="gallery">
        <div className="gallery-image">
            <img src="img/img/img1.png" alt="" className="image"/>
        </div>
        <div className="gallery-image">
            <img src="img/img/img2.png" alt="" className="image"/>
        </div>
        <div className="gallery-image">
            <img src="img/img/img3.png" alt="" className="image"/>
        </div>
        <div className="gallery-image">
            <img src="img/img/img4.png" alt="" className="image"/>
        </div>
        
    </div>
    </>
  );
};

export default Gallery;

