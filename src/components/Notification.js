import React from 'react'

const Notification = (props) => {
  
  const message = props.store.getState().notification;
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    message &&
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification