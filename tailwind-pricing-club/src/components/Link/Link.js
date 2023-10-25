import React from 'react';

const Link = (props) => {
    const {link, name} = props.route;
    return (
        <li className='mr-12'>
            <a href={link}>{name}</a>
        </li>
    );
};

export default Link;