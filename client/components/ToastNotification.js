import React from 'react'
import {Toast} from 'react-bootstrap'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastNotification = () => {
  toast.error('Cannot view page unless Logged in', {
    position: 'bottom-right',
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
  return (
    <div className="toast-div">
      <ToastContainer style={{width: '25%', height: '100px'}} />
    </div>
  )
}

export default ToastNotification
