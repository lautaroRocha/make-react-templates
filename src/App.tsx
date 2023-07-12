import {Counter} from './components'
import style from './App.module.css'

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
