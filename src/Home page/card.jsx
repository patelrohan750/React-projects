import React from 'react'
import './card.css'
const Card = ({image,title,onClickHandler}) => {
    return (
       
                <div className="custom_card">
                    <div className="poster">
                        <img src={image} alt="" className="img-fluid " />
                    </div>
                    <div className="text_btn" onClick={onClickHandler}>
                       {title}
                    </div>
                </div>
         
    )
}

export default Card
