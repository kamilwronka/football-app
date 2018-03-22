import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
    console.log(props.link);
    const link = `/league/${props.link}/${props.name}`;
    return(
        <NavLink to={link} exact className="nav-link bottom-menu-elem" activeClassName="active" >
            <i class={`fas fa-${props.icon}`}></i>
            {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        </NavLink>
    );
}
