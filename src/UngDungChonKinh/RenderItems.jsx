import React, { useState } from 'react'
import { glassesArr } from "./data";
import style from './Style.module.css'

export default function RenderItems() {
    const [selectedID, setSelectedID] = useState(null)
    let handleClick = (id) => {
        let pickedItem = glassesArr.find((glasses) => glasses.id === id);
        document.getElementById('pickedGlasses').src = pickedItem.url
        document.getElementById('glassesName').innerHTML = pickedItem.name
        document.getElementById('glassesDetail').innerHTML = pickedItem.desc
        setSelectedID(id)
    }
    console.log("🚀 [ handleClick [ selectedID:", selectedID)

    let renderGlasses = () => {
        return glassesArr.map((glasses) => {
            return (
                <div className="col-2 col-md-1" key={glasses.id} onClick={() => { handleClick(glasses.id) }}>
                    <img src={glasses.url} className="img-fluid" />
                </div>
            )
        })
    }
    return (
        <div>
            <div className="container my-4">
                <div className="glasses-selector text-center mt-4">
                    <div className="row justify-content-center">
                        {renderGlasses()}
                    </div>
                </div>
            </div>
        </div>
    )

}
