

import React from "react";
import i18next from 'i18next'
import './../styles/layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab)


class ProjectItem extends React.Component {
    constructor(props) {
        super(props)

      
        
    }
    render() {
        var render = 
        <div style={{display:'table-row'}}>
            <div style={{width: '10%',display:'table-cell'}}>{this.props.date}</div> &nbsp;
            <div style={{width:'20%',display:'table-cell',fontWeight:'bold'}}>{this.props.title} </div>&nbsp;

            <div style={{display:'table-cell'}} >{this.props.children}</div>
        </div>
    
        return render;
    }

}

export default ProjectItem;