import React from 'react';
import { useNavigate } from 'react-router-dom';

function Favorites(){
    const navigate = useNavigate()
    return <div>
        Characters
        <button onClick={()=>{
            navigate("/")
        }}>Go Home</button>
        <button onClick={()=>{
            navigate("/characters")
        }}>Go To Characters</button>
    </div>
}

export default Favorites;