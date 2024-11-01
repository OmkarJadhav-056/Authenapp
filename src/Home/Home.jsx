import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGear} from '@fortawesome/free-solid-svg-icons';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const history = useNavigate();

  useEffect(()=>{
    var retrievedObject = localStorage.getItem('usersession');
    if(!retrievedObject){
      history("/login");
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("usersession");
    history("/login");
  }

  return (
    <>
      <div className='main-box d-flex align-items-center justify-content-center'>
        <button className='logoutbtn' onClick={logout}>Logout</button>
        <div className='table-responsive'>
          <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>NAME</th>
                    <th>DATE</th>
                    <th>ROLE</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><img src="https://avatar.iran.liara.run/public/12" className='me-2'/>Michael Holz</td>
                    <td>04/10/2013</td>
                    <td>Admin</td>
                    <td><FontAwesomeIcon icon={faCircle} className='active-icon text-success me-2' />Active</td>
                    <td><div className='d-flex gap-3  ms-1'><FontAwesomeIcon className='text-info' icon={faGear} /><FontAwesomeIcon className='text-danger' icon={faCircleXmark} /></div></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><img src="https://avatar.iran.liara.run/public/98" className='me-2'/>Paula Wilson</td>
                    <td>05/08/2024</td>
                    <td>Publisher</td>
                    <td><FontAwesomeIcon icon={faCircle} className='active-icon text-success me-2' />Active</td>
                    <td><div className='d-flex gap-3  ms-1'><FontAwesomeIcon className='text-info' icon={faGear} /><FontAwesomeIcon className='text-danger' icon={faCircleXmark} /></div></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><img src="https://avatar.iran.liara.run/public/2" className='me-2'/>Antanio Moreno</td>
                    <td>11/05/2015</td>
                    <td>Publisher</td>
                    <td><FontAwesomeIcon icon={faCircle} className='active-icon text-danger me-2' />Suspended</td>
                    <td><div className='d-flex gap-3  ms-1'><FontAwesomeIcon className='text-info' icon={faGear} /><FontAwesomeIcon className='text-danger' icon={faCircleXmark} /></div></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><img src="https://avatar.iran.liara.run/public/92" className='me-2'/>Mary Saveley</td>
                    <td>06/09/2016</td>
                    <td>Reviewer</td>
                    <td><FontAwesomeIcon icon={faCircle} className='active-icon text-success me-2' />Active</td>
                    <td><div className='d-flex gap-3  ms-1'><FontAwesomeIcon className='text-info' icon={faGear} /><FontAwesomeIcon className='text-danger' icon={faCircleXmark} /></div></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><img src="https://avatar.iran.liara.run/public/18" className='me-2'/>Martin Sommer</td>
                    <td>12/08/2017</td>
                    <td>Moderator</td>
                    <td><FontAwesomeIcon icon={faCircle} className='active-icon text-warning me-2' />Inactive</td>
                    <td><div className='d-flex gap-3  ms-1'><FontAwesomeIcon className='text-info' icon={faGear} /><FontAwesomeIcon className='text-danger' icon={faCircleXmark} /></div></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Home
