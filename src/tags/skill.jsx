import React from "react";
import i18next from 'i18next'
import './../styles/layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)


class Skill extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var t = ''
        return(
            <div className='skill'> {this.props.children}  </div>
        )
    }

}

export default Skill;