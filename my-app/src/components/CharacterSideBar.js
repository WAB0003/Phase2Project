import React from 'react'
import CharacterCard from "./CharacterCard";
import {
  Checkbox,
  Container,
  Card,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const CharacterSideBar = ({allCharacters}) => {
  const [visible, setVisible] = React.useState(false)

  const characterDisplay = allCharacters.map((character,index)=>{
    return <CharacterCard key={index} character={character} />
    })

    const handleClick = (e) => {
        console.log(e.target)

    }

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={visible}
          label={{ children: <code>Filter By Game</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
          >
            <div>Testing</div>
            <Menu.Item onClick={handleClick} as='a' name='All'>All</Menu.Item>
            <Menu.Item as='a'target='SSB'>Super Smash Bros</Menu.Item>
            <Menu.Item as='a'name='Melee'>Melee</Menu.Item>
            <Menu.Item as='a'name='Brawl'>Brawl</Menu.Item>
            <Menu.Item as='a'name='SSB4'>SSB4</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
                <Container>
                    <Card.Group itemsPerRow={5}>
                        {characterDisplay}
                    </Card.Group>
                </Container>
            </Segment>
          </Sidebar.Pusher>
          </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  )
}

export default CharacterSideBar