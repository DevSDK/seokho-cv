

import React from "react";
import i18next from 'i18next'
import './../styles/layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from '../tags/link'
library.add(fab)


class Contacts extends React.Component {
    constructor(props) {
        super(props)

      
        
    }
    render() {
        return(
        <div className='contact'>
            <div className='contact-text'>0xdevssh@gmail.com</div>
            <Link icon='github' text='DevSDK' href='https://github.com/devsdk' />
            <Link icon='linkedin' text='seokho-song' href='https://www.linkedin.com/in/seokho-song/' />
            
        </div>
        )
    }

}

export default Contacts;