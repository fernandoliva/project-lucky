import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";

export default function Profile() {

  //Para consumir los datos hay que utilizar useEffect con JSON.parse
  const [userInLocal, setUserInLocal] = useState({});
  
  useEffect(() => {
    setUserInLocal(JSON.parse(localStorage.getItem("user")));
  },[])

  // console.log(userInLocal);

  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile__content">
          <img className='img-profile' src={userInLocal.imgAvatar} alt="imagen de usuario" />
          <h4>{userInLocal.name}</h4>
          <h5>{userInLocal.surname}</h5>
          <p><span>Email: </span> {userInLocal.email}</p>
          <p><span>Teléfono: </span> {userInLocal.telephone}</p>
          <p><span>Dirección: </span> {userInLocal.street}, {userInLocal.city}</p>
        </div>
        <div className="logout">
            <Link to="/user">
                <span className="logout__back--button">
                    <button>Cerrar Sesión</button>
                </span>
            </Link>
        </div>
      </div>
    </>
  );
}
