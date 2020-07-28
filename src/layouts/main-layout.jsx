

import React from "react";
import i18next from 'i18next'
import './../styles/layout.css'
import Contacts from './../shared/contacts'
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
        return(
        <div>
            <h1 className='title'><span className='title-deco'>S</span>eokho <span className='title-deco'>S</span>ong</h1>
            
            <div className="center status">"Be Limitless"</div>
            <div className='mainLayout'>

                <Contacts/>
                <div>
                {this.props.children}
                </div>
            </div>
        </div>
        )
    }

}

export default MainLayout;