import Counter from "./components/Counter"
import { useSelector } from "react-redux"

const App = () => {
  const count = useSelector(state => state.count)

  return (
    <div className="container">
      <h1>Counter: {count}</h1>
      <Counter />
    </div>
  )
}

export default App
