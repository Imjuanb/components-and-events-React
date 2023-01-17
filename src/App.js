import { useState } from "react";
import Input from "./components/Input";
import Boton from "./components/Boton"

const App = () => {
  const [user] = useState("");
  const [password, setPassword] = useState ("");

  return (
    <>
   <div className="text-center mx-5">
    <Input text="Nombre" type="text" placeholder="Ingrese nombre" />
    <Input password={password} setPassword={setPassword} text="Contraseña" type="password" placeholder="Ingrese contraseña"/>
   <div className="mt-2">
    {
      password === "252525" && <Boton name={user} password={password} text="correcto"></Boton>
    }

   </div>
   </div>
    </>
  )
}

export default App
