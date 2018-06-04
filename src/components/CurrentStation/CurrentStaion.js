import React from 'react'

const currentStation = (props) => {
  return (
    <div>
      <p>You are currently in {props.current}</p>
      <select name="currentStation">
        <option>Staylybridge</option>
        <option>Greenfield</option>
        <option>Marsden</option>
        <option>Slaithwaite</option>
        <option>Huddersfield</option>
        <option>Mirfield</option>
        <option>Dewsbury</option>
        <option>Batley</option>
    </select>
    </div>
  )
}

export default currentStation
