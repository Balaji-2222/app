import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', list: [], isFavourite: false, isStarred: false}

  changeDetails = event => {
    event.preventDefault()
    const {title, list, date, isFavourite} = this.state
    const newList = {
      title,
      date,
      id: uuidv4(),
      isFavourite: false,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newList],
      title: '',
      date: '',
    }))
  }

  starColorChange = id => {
    this.setState(prevState => ({
      list: prevState.list.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isFavourite: !eachContact.isFavourite}
        }
        return eachContact
      }),
    }))
  }

  changeListItems = () => {
    const {isStarred} = this.state
    this.setState(prevState => ({isStarred: !prevState.isStarred}))
  }

  changeTitle = event => {
    this.setState({title: event.target.value})
  }

  changeDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {list, isStarred} = this.state
    const colorChange = isStarred ? 'blue-color' : 'white-color'
    const newList = list.filter(eachItem => eachItem.isFavourite === isStarred)
    return (
      <div className="bgContainer">
        <div className="sideContainer">
          <div className="bgContainer">
            <h1 className="topHeading">Add Appointment</h1>
            <h1 className="titleHeading">Title</h1>
            <input
              type="text"
              placeholder="Title"
              onChange={this.changeTitle}
            />
            <h1 className="date">Date</h1>
            <input
              type="date"
              placeholder="dd/mm/yyyy"
              onChange={this.changeDate}
            />
            <br />
            <button type="submit" onClick={this.changeDetails}>
              ADD
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
        </div>

        <h1 className="listHeading">Add Appointments</h1>
        <button
          type="button"
          onClick={this.changeListItems}
          className={colorChange}
        >
          Starred
        </button>
        <ul>
          {newList.map(eachItem => (
            <AppointmentItem
              eachItem={eachItem}
              starColorChange={this.starColorChange}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Appointments
