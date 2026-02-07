import './App.css'
import Button from './components/Button/button'
import { ButtonSize, ButtonType } from './components/Button/types'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={(e)=>{e.preventDefault();alert(123)}}>Hello</Button>
        <Button disabled>Disabled Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" >Baidu Link</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled> Disabled Baidu Link</Button>
      </header>
    </div>
  )
}

export default App
