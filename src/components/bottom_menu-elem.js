import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
    const {name} = props;
    const link = `/league/${props.link}/${name}`;
    return(
        <NavLink to={link} exact className="bottom-menu-elem" activeClassName="bottom-menu-active" >
            <i className={`fas fa-${props.icon}`}></i>
            <p>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</p>
        </NavLink>
    );
}
