import React from "react";
import i18next from 'i18next'
import './../styles/layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab)


class Link extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
        <div className='contact-text'> <FontAwesomeIcon style={{width:'16px'}} icon={['fab',this.props.icon]}/>  <a href={this.props.href}>{this.props.text}</a></div>
        )
    }

}

export default Link;