import React from 'react'
import style from './Style.module.css'

export default function NoGlasses() {
    let modelImgURL = process.env.PUBLIC_URL + "/glassesImage/model.jpg";
    return (
        <div className={`col-md-5 ${style.glasses_img}`}>
            <img src={modelImgURL} alt="Without Glasses" />
        </div>
    )
}
