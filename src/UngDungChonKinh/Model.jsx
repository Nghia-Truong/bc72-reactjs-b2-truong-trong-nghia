import React from 'react'
import WithGlasses from './WithGlasses'
import NoGlasses from './NoGlasses'



export default function Model() {
    return (
        <div><div className="container my-4">
            <div className="row justify-content-center text-center">
                <WithGlasses />
                <NoGlasses />
            </div>
        </div></div>
    )
}
