import React, { useState } from 'react'
import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import Button from './components/Button/button'
import { ButtonSize, ButtonType } from './components/Button/types'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon={['fas', 'arrow-down']} size="10x" theme="primary"/>
        <Menu mode="vertical" defaultIndex="0" onSelect={(index) => { alert(index) }} defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link2
          </MenuItem>
          
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
          </SubMenu>

          <MenuItem>
            cool link3
          </MenuItem>
        </Menu>
        <Button size={ButtonSize.Large} onClick={() => { setShow(!show) }}>Toggle</Button>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
        >
          <div>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </div>
        </Transition>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-right"
          wrapper
        >
          <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>A Large Button</Button>
        </Transition>
        {/* <Button onClick={(e) => { e.preventDefault(); alert(123) }}>Hello</Button>
        <Button disabled>Disabled Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" >Baidu Link</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled> Disabled Baidu Link</Button> */}
      </header>
    </div>
  )
}

export default App
