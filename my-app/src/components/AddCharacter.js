import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'


function AddCharacter ({character}) { 

  return (
    <Form>
      <Form.Field>
        <label>New Player Name</label>
        <input placeholder='Enter Name Here' />
      </Form.Field>
      <Form.Field>
        <label>Special Moves</label>
        <input placeholder='Enter Any Special Moves' />
      </Form.Field>
      <Form.Field>
        <label>Image</label>
        <input placeholder='Enter Image URL' />
      </Form.Field>
      <Form.Field>
        <label>Series</label>
        <input placeholder='Enter Game Series' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
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