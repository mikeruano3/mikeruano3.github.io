import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './rainbow.scss'

const LinkComponent = props => {
    const { to, styleBefore, activeClassName, exact, children} = props

    const [hoverState, setHoverState] = useState({hover: false})
    const [linkStyle, setLinkStyle] = useState(styleBefore)
    
    const toggleStyle = () => {
        if (hoverState.hover) {
            setLinkStyle(styleBefore)
        } else {
            setLinkStyle(styleBefore)
        }
        setHoverState({hover: !hoverState.hover})
    };

    return (
            <NavLink to={to} className={linkStyle} activeClassName={activeClassName} exact={exact}
                onMouseEnter={toggleStyle} 
                onMouseLeave={toggleStyle}>
                {
                hoverState.hover ? 
                    (
                        <ul className="c-rainbow">
                            <li className="c-rainbow__layer c-rainbow__layer--white">{children}</li>
                            <li className="c-rainbow__layer c-rainbow__layer--orange">{children}</li>
                            <li className="c-rainbow__layer c-rainbow__layer--red">{children}</li>
                            <li className="c-rainbow__layer c-rainbow__layer--violet">{children}</li>
                            <li className="c-rainbow__layer c-rainbow__layer--blue">{children}</li>
                            <li className="c-rainbow__layer c-rainbow__layer--green">{children}</li>
                            <li className="c-rainbow__layer c-rainbow__layer--yellow">{children}</li>
                        </ul>  
                    ):(
                        children
                    )
                }
            </NavLink>
    )
} 

export default LinkComponent