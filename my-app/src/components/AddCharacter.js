 import React, {useState} from 'react';


function AddCharacter ({character}) { 
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setForm({
      ...form, 
      [name]: value, 
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost.3001/characters', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
      .then((res) => res.json())
      .then((data) => AddCharacter(character));
    };
    console.log(character);
    return ( 
      <div className="new-character-form">
      <h2>Add Character</h2>
      <form onSubmit={handleSubmit}>
      <input
      onChange={handleChange}
      type="text"
      name="name"
      placeholder="Name"
      />
      <input
      onChange={handleChange}
      type="img"
      name="image"
      placeholder="Image URL"
      />
      <input
      onChange={handleChange}
      type="text"
      name="Special"
          placeholder="Special Moves"
          />
          <button type="submit">Add Character</button>
          </form>
          </div>
          );
        } 


export default AddCharacter;
        /* const baseURL = "http://localhost:3001/characters"
        
        
        
        function NewCharacterForm({addCharacter}) {
          const [name, setName] = useState("");
          const [image, setImage] = useState("");
          const [specialMoves, setSpecialMoves] = useState("");
          
          function handleSubmit(e) {
            e.preventDefault();
            fetch(baseURL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                image,
          specialMoves
        }),
      })
      .then((r) => r.json())
      .then((newCharacters) => addCharacter(newCharacters));
      
      setName("");
      setImage("");
      setSpecialMoves("");
    }
    
    return (
      <form className="new-character-form" onSubmit={handleSubmit} >
      <input
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      
      <input 
      placeholder="Image"
      value={image}
      onChange={(e) => setImage(e.target.value)}
      />
      
      <input 
      placeholder="Special Moves"
      rows={10}
      value={specialMoves}
      onChange={(e) => setSpecialMoves(e.target.value)}
      />
      
      <input  
      type="submit"
      value="Add Character"
      />
      </form>
      );
    }
    */
 //export default AddCharacter;