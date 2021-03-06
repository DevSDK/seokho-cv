import React from "react";

import './../styles/layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Link from '../components/link'

library.add(fab)


const Contacts = () => {
    return (
        <div className='contact'>
            <div className='contact-text'>0xdevssh@gmail.com</div>
            <Link icon='github' text='DevSDK' href='https://github.com/devsdk' />
            <Link icon='linkedin' text='seokho-song' href='https://www.linkedin.com/in/seokho-song/' />
        </div>
    )
}

export default Contacts;