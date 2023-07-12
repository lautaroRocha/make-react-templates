import {Counter} from './components'
import style from './App.module.css'

function App() {

  return (
    <div className={style.app}>
      <div>
      <h1 className={style.title}>makeReact</h1>
       <Counter />
      </div>
    </div>
  )
}

export default App
