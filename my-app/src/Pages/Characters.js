import React from 'react';
import { useNavigate } from 'react-router-dom';

function Characters(){
    const navigate = useNavigate()
    return <div>
        Characters
        <button onClick={()=>{
            navigate("/")
        }}>Go Home</button>
        <button onClick={()=>{
            navigate("/favorites")
        }}>Go To Favorites</button>
    </div>
}

export default Characters;