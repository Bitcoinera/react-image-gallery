import React from 'react'

const ImagesList = (props) => {
    const images = props.images.map( ({id, urls, description}) => 
    <img key={id} src={urls.small} alt={description}></img>)
    
    return (
        <div style={{'textAlign': 'center'}}>
            {images}
        </div>
    )
}

export default ImagesList