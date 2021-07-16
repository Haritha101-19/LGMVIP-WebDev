import React from 'react';
import './card.css';


function Card(props){
    return(
        <div className="cardlist mx-auto">
        {props.userData.map((user,index)=>{
            return(
                <div className="col-lg-4 col-md-6 mt-2 col-sm-8 col-xs-10 mx-auto">
                <div className="usercard" key={index}>
                    <img src={user.avatar} alt="..." className="image"/>
                    <div className="cardbody">
                        <h3>
                            {user.first_name} {user.last_name}
                        </h3>
                        <p>{user.email}</p>
                        <button className="button">Connect</button>
                    </div>
                </div>
                </div>
            );
        })}
        </div>
    );
}


export default Card;