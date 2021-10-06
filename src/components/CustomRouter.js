import { Switch, Route } from 'react-router-dom'
import { CharacterList } from './character/CharacterList'
import NPCList from './npc/NPCList'
import TownList from './town/TownList'
import Home from './Home'

const CustomRouter = () => {
  return (
    <Switch>
      <Route path='/pcs'>
        <CharacterList />
      </Route>
      <Route path='/npcs'>
        <NPCList />
      </Route>
      <Route path='/towns'>
        <TownList />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  )
}

export default CustomRouter
