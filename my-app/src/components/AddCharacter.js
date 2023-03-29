import React from 'react'
import { Button, Form , Container} from 'semantic-ui-react'
import { useState } from 'react'


function AddCharacter ({baseURL, handleNewCharacter}) { 

  const [formData, setFormData] = useState({
    name: "",
    special: "",
    images:"",
    seriesName: "",
  })
  //destructure formData into useable items
  const {name, special, images, seriesName} = formData

  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name] : e.target.value,
    })
  }
  //!create a submit button event To send new player to Character list
  const handleSubmit = (e) => {
    e.preventDefault()
  //*Create a new Object EXACTLY like the object being sent to server
    const newPlayerObj = {
      alsoAppearsIn: [
      "N/A"
      ],
      availability: "Starter",
      images:{
        icon:"",
        portrait: images,
      },
      name:name,
      order:"1",
      special: [special],
      tier: "A",
      series:{
        icon:"",
        name :seriesName
      }
    }

    //*Add newPlayer to data base
    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body:JSON.stringify(newPlayerObj)
    })
    .then((r)=>r.json())
    .then((newPlayer)=>{
      handleNewCharacter(newPlayer)
    } )

    //*Reset the form after it's been submitted
    setFormData({
      name: "",
      special: "",
      images:"",
      seriesName: "",
    })
  }

  return (
    <Container style={{paddingTop: "6em"}} >
      <Form >
        <Form.Field width={5}>
          <label>New Player Name</label>
          <input placeholder='Enter Name Here' name="name" value={name} onChange={handleChange}/>
        </Form.Field>
        <Form.Field width={5}>
          <label>Special Moves</label>
          <input placeholder='Enter Any Special Moves' name="special" value={special} onChange={handleChange}/>
        </Form.Field>
        <Form.Field width={5}>
          <label>Image</label>
          <input placeholder='Enter Image URL' name="images" value={images} onChange={handleChange}/>
        </Form.Field>
        <Form.Field width={5}>
          <label>Series</label>
          <input placeholder='Enter Game Series' name="seriesName" value={seriesName} onChange={handleChange}/>
        </Form.Field>
        <Button type='submit'onClick={handleSubmit} >Add New Player</Button>
      </Form>
    </Container>
  )
 
}
export default AddCharacter;

  // {
  //   "alsoAppearsIn": [
  //     "SSB",
  //     "Melee",
  //     "Brawl",
  //     "SSB4"
  //   ],
  //   "availability": "Starter",
  //   "images":{
  //     "icon":"https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501674/Ultimate%20Characters/Icons/120px-MarioHeadSSBUWebsite_hkzzpq.png",
  //     "portrait":"https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501176/Ultimate%20Characters/Portraits/350_emjsmz.png"
  //   },
  //   "name":"Mario",
  //   "order":"1",
  //   "special": ["Fireball","Cape","Super Jump Punch","F.L.U.D.D."],
  //   "tier": "A",
  //   "series":{
  //     "icon":"https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501902/Series/mario_ncgezx.svg",
  //     "name":"Mario"
  //   }