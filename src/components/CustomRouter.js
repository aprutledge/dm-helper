import { Switch, Route } from 'react-router-dom'
import CharacterList from './character/CharacterList'
import NPCList from './npc/NPCList'
import TownList from './town/TownList'
import Home from './Home'
import Login from './auth/Login'
import Register from './auth/Register'
import { DiceRoller } from './dice/DiceRoller'

const CustomRouter = () => {
  return (
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/pcs'>
        <CharacterList />
      </Route>
      <Route path='/npcs'>
        <NPCList />
      </Route>
      <Route path='/towns'>
        <TownList />
      </Route>
      <Route path='/dice'>
        <DiceRoller />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  )
}

export default CustomRouter
