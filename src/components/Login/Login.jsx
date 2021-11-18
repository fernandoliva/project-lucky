import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { loginUser } from "../../api/Login/apiLogin";
import logo from "../../assets/img/logo.png";


const Login = () => {
  const navigate = useNavigate();

  // const [passwordShown, setPasswordShown] = useState(false);

  const {
    register,
    handleSubmit,
  } = useForm();

  const submit = (data) => {
    signIn(data);
  };

  const signIn = async (user) => {
    try {
      const res = await loginUser(user);
      localStorage.setItem("token",res.token);
      localStorage.setItem("user", JSON.stringify(res.userInBd));
      const userInLocal = localStorage.getItem("user");
      if(userInLocal){
        return(
          <Link
            to={{
              pathname: "/home",
              state: userInLocal
            }}
          >
            {navigate("/home")}
          </Link>
        )
      }else{
        return(
          <>

          </>
        )
      }

      // eslint-disable-next-line no-unreachable
      // console.log("user ->> ",userInLocal)
    } catch (error) {
      return console.log(error);
    }
  };
  
  return (
    <div className="cont-Login">
      <div className="cont-logo">
        <img src={logo} alt="logo:Lucky" />
      </div>
      <div className="cont-header">
        <p>¡Hola! para continuar, inicia sesión o crea una cuenta</p>
      </div>
      <form className="cont-form" onSubmit={handleSubmit(submit)}>
        <input
          className="input"
          placeholder="email@email.com"
          type="text"
          name="email"
          {...register("email", {
            required: true,
          })}
        />
        <div className="pass-wrapper">
           <input
          className="input"
          placeholder="password"
          type="password"
          name="password"
          {...register("password", {
            required: true,
          })}
        />
        
        </div>
       
        <div className="forgot-pass">
          <p>¿Has olvidado tu contraseña?</p>
        </div>
        <div className="cont-inputs-buttons">
          <input
            className="create-acc"
            type="button"
            value="Crear cuenta"
            onClick={() => navigate("/user/register")}
          />
          <input className="in-session" type="submit" value="Iniciar sesión" />
        </div>
      </form>
    </div>
  );
};

export default Login;
