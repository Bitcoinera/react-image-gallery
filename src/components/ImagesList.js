import React from 'react'
import './ImagesList.css'
import './ImageCard'
import ImageCard from './ImageCard'

const ImagesList = (props) => {
    const images = props.images.map( (image) => 
    <ImageCard key={image.id} image={image} />)
    
    return (
        <div className={'images-list'}>
            {images}
        </div>
    )
}

export default ImagesList