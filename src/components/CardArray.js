import React, { Fragment } from 'react';
import Card from './Card';

const CardArray = (props)=>{

    const {robots} = props; //destructuring
    const cardList = robots.map((user,index)=>{
        return <Card key={index} id={user.id} name={user.name} email={user.email}/>
    });

    return (
        <Fragment>
           {cardList}; 
        </Fragment>
    )
        
}

export default CardArray;