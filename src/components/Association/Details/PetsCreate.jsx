// import React, { useState } from "react";

// import { postPets } from "../../../api/servicesPets/apiPetsFetch";
// import { useNavigate } from "react-router-dom";

// const INIT = {
//   name: "",
//   email: "",
//   phone: "",
//   address: "",
//   city: "",
// };

// const PetsCreate = () => {
//   const [pet, setPet] = useState(INIT);
//   const navigate = useNavigate();

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setPet({ ...pet, [name]: value });
//   };

//   const submitForm = (e) => {
//     e.preventDefault();
//     addPet();
//   };
//   const addPet = async () => {
//     try {
//       const newPet = await postPets(pet);
//       if (newPet) {
//         navigate("/pets");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="component-form">
//       <div className="form-container-AF">
//         <h3 className="title-container-AF">Registro de animal</h3>
//         <form onSubmit={submitForm}>
//           <fieldset>
//             <label>
//               <p>Nombre de la Mascota</p>
//               <input
//                 type="text"
//                 className="input-form-AF"
//                 name="name"
//                 value={pet.name}
//                 onChange={handleInput}
//               />
//             </label>
//             <label>
//               <p>Imagen de la Mascota</p>
//               <input
//                 type="text"
//                 className="input-form-AF"
//                 name="imgpets"
//                 value={pet.imgpets}
//                 onChange={handleInput}
//               />
//             </label>
//             <label>
//               <p>Especie de la Mascota</p>
//               <input
//                 type="text"
//                 className="input-form-AF"
//                 name="species"
//                 value={pet.species}
//                 onChange={handleInput}
//               />
//             </label>
//             <label>
//               <p>Genero de la Mascota</p>
//               <input
//                 type="text"
//                 className="input-form-AF"
//                 name="gender"
//                 value={pet.gender}
//                 onChange={handleInput}
//               />
//             </label>
//             <label>
//               <p>Cumplea??os de la Mascota</p>
//               <input
//                 type="text"
//                 className="input-form-AF"
//                 name="birthday"
//                 value={pet.birthday}
//                 onChange={handleInput}
//               />
//             </label>
//             <label>
//               <p>Tama??o de la Mascota</p>
//               <input
//                 type="text"
//                 className="input-form-AF"
//                 name="size"
//                 value={pet.size}
//                 onChange={handleInput}
//               />
//             </label>
//             <label>
//               <p>Personalidad de la Mascota</p>
//               <input
//                 type="text"
//                 className="input-form-AF"
//                 name="personality"
//                 value={pet.personality}
//                 onChange={handleInput}
//               />
//             </label>
//             <label>
//               <p>Historia de la Mascota</p>
//               <input
//                 type="text"
//                 className="input-form-AF"
//                 name="histoty"
//                 value={pet.history}
//                 onChange={handleInput}
//               />
//             </label>
//             <label>
//               <p>Asociaci??n de la Mascota</p>
//               <input
//                 type="text"
//                 className="input-form-AF"
//                 name="association"
//                 value={pet.association}
//                 onChange={handleInput}
//               />
//             </label>
//             {/* <div className="terms-container-AF">
//               <p>
//                 <input id="checkbox-AF" type="checkbox" />
//                 <label for="checkbox-AF">
//                   <span></span>Acepto los t??rminos y condiciones
//                 </label>
//               </p>
//             </div> */}
//             <div className="div-btn-continue-AF">
//               <button className="btn-continue-AF" type="submit">
//                 Guardar Mascota
//               </button>
//             </div>
//           </fieldset>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PetsCreate;
