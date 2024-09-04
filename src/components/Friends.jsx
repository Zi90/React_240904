import React from 'react';


const Friends = (props) => {

    const {name, addr, job, phone} = props.fri;

    return (
        <div className='friends'>
           <h3>{name}: {phone}, {addr}, {job}</h3>
        </div>
    );
};
export default Friends;