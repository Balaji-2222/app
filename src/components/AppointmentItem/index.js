import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {eachItem, starColorChange} = props
  const {title, date, id, isFavourite} = eachItem
  const newDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const changeColor = () => {
    starColorChange(id)
  }
  const imageUrl = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="listItem">
      <div className="inside">
        <p>{title}</p>
        <p>{newDate}</p>
      </div>
      <button
        type="button"
        onClick={changeColor}
        data-testid="star"
        className="button"
      >
        <img src={imageUrl} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
