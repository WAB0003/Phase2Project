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
    <div className='bg' style={{paddingTop: "7%"}}>
      <div className='formBorder' style={{paddingTop: "2em2%"}}>
        <Container >
          <Form >
            <Form.Field >
              <label>New Player Name</label>
              <p>ex: Joel Miller</p>
              <input placeholder='Enter Name Here' name="name" value={name} onChange={handleChange}/>
            </Form.Field>
            <Form.Field >
              <label>Special Moves</label>
              <p>ex: Kick Butt</p>
              <input placeholder='Enter Any Special Moves' name="special" value={special} onChange={handleChange}/>
            </Form.Field>
            <Form.Field >
              <label>Image Url</label>
              <p>ex: https://upload.wikimedia.org/wikipedia/en/9/94/Joel_in_The_Last_of_Us.png</p>
              <input placeholder='Enter Image URL' name="images" value={images} onChange={handleChange}/>
            </Form.Field>
            <Form.Field >
              <label>Series</label>
              <p>ex: The Last of Us</p>
              <input placeholder='Enter Game Series' name="seriesName" value={seriesName} onChange={handleChange}/>
            </Form.Field>
            <Button type='submit'onClick={handleSubmit} >Add New Player</Button>
          </Form>
        </Container>
      </div>
    </div>


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