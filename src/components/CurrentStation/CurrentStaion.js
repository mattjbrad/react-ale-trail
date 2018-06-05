import React from 'react'

const currentStation = (props) => {
  return (
    <div>
      <p>You are currently in {props.current}</p>
      <select onChange={props.change} name="currentStation">
        <option value='syb'>Staylybridge</option>
        <option value='gnf'>Greenfield</option>
        <option value='msn'>Marsden</option>
        <option value='swt'>Slaithwaite</option>
        <option value='hud'>Huddersfield</option>
        <option value='mir'>Mirfield</option>
        <option value='dew'>Dewsbury</option>
        <option value='btl'>Batley</option>
    </select>
    </div>
  )
}

export default currentStation
