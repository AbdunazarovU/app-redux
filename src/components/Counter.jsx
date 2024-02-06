import {useDispatch} from "react-redux"
import AddCounter from "./AddCounter"
import { minusCounter, plusCounter, resetCounter } from "../reducers/count";

const Counter = () => {
  const dispatch = useDispatch();

  return (
    <div className='btn-group'>
      <AddCounter handler={() => dispatch(plusCounter())} styles={"success"} Children={"Plus"} />
      <AddCounter handler={() => dispatch(minusCounter())} styles={"secondary"} Children={"Minus"} />
      <AddCounter handler={() => dispatch(resetCounter())} styles={"danger"} Children={"Reset"} />
    </div>
  )
}

export default Counter
