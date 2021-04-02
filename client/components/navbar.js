import React from 'react'
import {useAuth} from '../contexts/AuthContext'

const Navbar = () => {
  const {currentUser} = useAuth()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img alt="" src="logo.png" height="50" width="50" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {currentUser ? (
            ''
          ) : (
            <a className="nav-item nav-link active" href="/record">
              Record Now <span className="sr-only">(current)</span>
            </a>
          )}
          <a className="nav-item nav-link" href="/login">
            Log in
          </a>
          <a className="nav-item nav-link" href="/profile">
            Profile
          </a>
          <a className="nav-item nav-link" href="/recordings">
            All Recordings
          </a>
          <a className="nav-item nav-link" href="/about">
            About Us
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

// <div>
//   <nav>
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">
//             <img alt="" src="logo.png" />
//           </a>
//           <div className="collapse navbar-collapse" id="navbarText">
//             <ul className="navbar-nav nav-fill w-100">
//               {currentUser ? (
//                 ''
//               ) : (
//                 <li className="nav-item">
//                   <a
//                     className="nav-link active"
//                     aria-current="page"
//                     href="/login"
//                   >
//                     Login
//                   </a>
//                 </li>
//               )}
//               <li className="nav-item">
//                 <a
//                   className="nav-link active"
//                   aria-current="page"
//                   href="/record"
//                 >
//                   Record
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link active"
//                   aria-current="page"
//                   href="/dashboard"
//                 >
//                   Profile
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link active"
//                   aria-current="page"
//                   href="/recordings"
//                 >
//                   All Recordings
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link active"
//                   aria-current="page"
//                   href="/learnmore"
//                 >
//                   About Us
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   </nav>
// </div>
