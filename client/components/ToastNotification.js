import React from 'react'
import {Toast} from 'react-bootstrap'
const ToastNotification = () => {
  return (
    <div>
      <Toast className="toast-noti">
        <Toast.Body>YOU MUST BE LOGGED IN TO SEE THIS PAGE</Toast.Body>
      </Toast>
    </div>
  )
}

export default ToastNotification
