import React from 'react'
import './style.css'
import {Images} from '../../config/image'
function Component_Ngang(props) {
    return (
        <div>
            <div className="box-ngang">
                <img style={{height:"60px", width:"auto"}} src={props.img}/>
                <div style={{display:"flex",justifyContent:"center"}}>
                <div className="topicabc">
                {props.topic}
                </div>
                </div>
                <div  style={{display:"flex",justifyContent:"center"}}>
                <div className="content-n">
                {props.content}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Component_Ngang
