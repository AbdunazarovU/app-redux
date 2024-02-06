import AddCounter from "./AddCounter"

const Counter = ({plusHandler, resetHandler, minusHandler}) => {
  return (
    <div className='btn-group'>
      <AddCounter handler={plusHandler} styles={"success"} Children={"Plus"} />
      <AddCounter handler={minusHandler} styles={"secondary"} Children={"Minus"} />
      <AddCounter handler={resetHandler} styles={"danger"} Children={"Reset"} />
    </div>
  )
}

export default Counter
