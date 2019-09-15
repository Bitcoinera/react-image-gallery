import React from 'react'

const ImagesList = (props) => {
    console.log(props.images)
    return (
        <div>
            <p>Found: {props.images.length}</p>
        </div>
        
    )
}

export default ImagesList