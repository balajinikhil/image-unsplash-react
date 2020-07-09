import React from 'react'
import ImageCardHeight from './ImageCardHeight'
import './imageCard.css'

const ImageRender = (props)=>{

    

    const imgs = props.image.map((e)=>{
        return (
            <ImageCardHeight key={e.id} image={e} />
        )
    })





    return(

        <div className="image-list">
            {imgs}
        </div>

    )



}

export default ImageRender;