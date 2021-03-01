import React from "react";

import './../styles/layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab)

const Link = (props) => {
    return (
        <div className='contact-text'>
            <FontAwesomeIcon style={{ width: '16px' }} icon={['fab', props.icon]} />
            <a href={props.href}>{props.text}</a>
        </div>
    )
}

export default Link;