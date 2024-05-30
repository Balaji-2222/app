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
    let newList = ''
    if (isStarred) {
      newList = list.filter(eachItem => eachItem.isFavourite === isStarred)
    } else if (isStarred === true || isStarred === false) {
      newList = list
    }
    return (
      <div className="bgContainer">
        <div className="mainContainer">
          <div className="listContainer">
            <div>
              <h1 className="topHeading">Add Appointment</h1>
              <label htmlFor="head1" className="titleHeading">
                TITLE
              </label>
              <br />
              <input
                id="head1"
                type="text"
                placeholder="Title"
                onChange={this.changeTitle}
              />
              <br />
              <label htmlFor="head2" className="date">
                DATE
              </label>
              <br />
              <input
                id="head2"
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
          <hr className="seprator" />
          <div className="output">
            <h1 className="listHeading">Appointments</h1>
            <button
              type="button"
              onClick={this.changeListItems}
              className={colorChange}
            >
              Starred
            </button>
          </div>
          <ul className="arrange">
            {newList.map(eachItem => (
              <AppointmentItem
                eachItem={eachItem}
                starColorChange={this.starColorChange}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
