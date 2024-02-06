const AddCounter = ({handler, Children, styles}) => {
  return (
    <button className={`btn btn-${styles}`} onClick={handler} >{Children}</button>
  )
}

export default AddCounter
