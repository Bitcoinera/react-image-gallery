import './ImagesList.css'
import React from 'react'

const ImagesList = (props) => {
    const images = props.images.map( ({id, urls, description}) => 
    <img key={id} src={urls.small} alt={description}></img>)
    
    return (
        <div className={'images-list'}>
            {images}
        </div>
    )
}

export default ImagesList