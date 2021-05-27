import React from 'react'
import "./mainSpaceText.css"

export const ContentLayout = props => {

    // NO USAR POR PERFORMANCE DEE LA APP, CONSUME MUCHO CPU
    const list = Array(200).fill().map((item, idx) => <p>Number {idx}</p>)
    console.log(list)

    return  <div>
        <p>HOLAMUNDO</p>
        { list }
    </div>
}
