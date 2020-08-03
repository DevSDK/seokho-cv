

import React from "react";
import i18next from 'i18next'
import './../styles/layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab)


class AwardItem extends React.Component {
    constructor(props) {
        super(props)

      
        
    }
    render() {
        
        var render  = 
        <div style={{marginBottom:'10px'}}>
        <div className='award-item'>
        
        <div style={{width:'10%',display:'table-cell'}}>{this.props.year}</div> &nbsp;
         <div style={{width:'50%',display:'table-cell'}}>{this.props.title}</div>  &nbsp;
         
         <div className ='breakable' style={{ width:'15%',display:'table-cell'}}>{this.props.prize}</div>&nbsp;
         <div style={{width:'25%',display:'table-cell',textAlign:'right'}}>{this.props.from}</div> 
         </div>
        </div>
        return render;
    }

}

export default AwardItem;