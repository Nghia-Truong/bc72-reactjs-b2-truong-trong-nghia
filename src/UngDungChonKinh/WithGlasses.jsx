import React from 'react'
import style from './Style.module.css'

export default function WithGlasses() {
    let modelImgURL = process.env.PUBLIC_URL + "/glassesImage/model.jpg";
    return (
        <div className={`col-md-5 ${style.glasses_img}`}>
            <img id="glassesImage" src={modelImgURL} alt="With Glasses" />
            <div ><img src="${pickedItem.url}" alt="" className={style.glasses_position} id='pickedGlasses' /></div>
            <div id="glassesDescription" className={style.description}>
                <p className="fw-bold" id="glassesName">With Glasses</p>
                <p id="glassesDetail"></p>
            </div>
        </div >
    )
}
