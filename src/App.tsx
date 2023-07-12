import style from './App.module.css'
import {Counter} from './components'

function App() {


  return (
    <>
      <h1 className={style.title}>makeReact</h1>
      <div>
       <Counter />
      </div>
    </>
  )
}

export default App
