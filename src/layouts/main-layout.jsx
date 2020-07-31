

import React from "react";
import { Link } from "gatsby"
import i18next from 'i18next'
import './../styles/layout.css'
import Contacts from './../shared/contacts'
import Helmet from 'react-helmet'
i18next.init({
    lng:'en',
    debug:true,
    resources: {
        en:{
            translation:{
                
            }
        },
        ko:{
            translation:{

            }
        }
    }
})

class MainLayout extends React.Component {
    constructor(props) {
        super(props)

        i18next.changeLanguage(this.props.lng,function(){})
        
    }
    render() {
        var tags =<Link to='/ko'>한글 버전</Link>
        if(this.props.lng === 'ko')
            tags = <Link to= '/'>English</Link>
        return(

    <div>
        <Helmet>
            <title>Seokho Song</title>
        </Helmet>
            <div style={{fontWeight:'bold'}}>
                {tags}
            </div>
            <h1 className='name'><span className='name-deco'>S</span>eokho <span className='title-deco'>S</span>ong</h1>
            <div className="center status">"Be Limitless"</div> 

            <div className='mainLayout'>
                <div className='header'>
                <Contacts/>
                <div className='header-information'> Computer Science And Engineering in Pai Chai University</div>
                
                <div className='header-information'> Average  GPA 4.34</div>
                <div className='header-information'> Average Major GPA 4.5</div>

                </div>
                <div>
                     {this.props.children}
                </div>
            </div>
        </div>
        )
    }

}

export default MainLayout;