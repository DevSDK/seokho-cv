

import React from "react";
import i18next from 'i18next'
import './../styles/layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab)


class Items extends React.Component {
    constructor(props) {
        super(props)

      
        
    }
    render() {
        var render =<div className= 'contents-divider'>
        <div className='contents-title titles'><span className="contents-title-deco">{this.props.title[0]}</span>{this.props.title.substring(1)}</div>
        <div className='text-content'>
        {this.props.children}
        </div>
    </div>
        return render;
    }

}

export default Items;