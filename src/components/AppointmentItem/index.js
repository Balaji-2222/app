const AppointmentItem = props => {
  const {eachItem, starColorChange} = props
  const {title, date, id, isFavourite} = eachItem
  console.log(isFavourite)

  const changeColor = () => {
    starColorChange(id)
  }
  const imageUrl = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="listItem">
      <h1>{title}</h1>
      <p>{date}</p>
      <button type="button" onClick={changeColor}>
        <img src={imageUrl} alt="itemImage" />
      </button>
    </li>
  )
}

export default AppointmentItem
