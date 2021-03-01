import React from "react";

import './../styles/layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const AwardItem = (props) => {
    return(
        <div style={{marginBottom:'10px'}}>
        <div className='award-item'>
        <div style={{width:'10%',display:'table-cell'}}>{props.year}</div> &nbsp;
        <div className ='breakable' style={{ width:'15%',display:'table-cell', fontWeight:"bold"}}>{props.prize}</div>&nbsp;
        <div style={{width:'50%',display:'table-cell'}}>{props.title}</div>  &nbsp;
        <div style={{width:'25%',display:'table-cell',textAlign:'right'}}>{props.from}</div> 
        </div>
        </div>
    )
}

export default AwardItem;