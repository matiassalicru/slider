import React from 'react';

export const ImgComp = ({ src }) => {

    const imgStyles = {
        height: 100+"%",
        width: 100+"%",
    }

    return (
        <img src={src} alt="slideImg" style={imgStyles}/>
    )
}