import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import Button from './components/Button/button'
import { ButtonSize, ButtonType } from './components/Button/types'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon icon={faCoffee} size="3x" />
        <Menu defaultIndex="0" onSelect={(index) => { alert(index) }} defaultOpenSubMenus={['2']}>
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
