import { ChangeEvent, useState } from "react"
import { useForm } from "../hooks/useForm";


//creamos la interface para poder recibir diferentes tipos de datos 
interface FormData {
    email: string;
    nombre: string;
    edad:number
}
export const Formulario = () => {
  const { formulario ,handleChange} = useForm<FormData>({
    email:"",
    nombre:"",
    edad:25
  });

  const {email , nombre , edad} = formulario;
    // const [formulario, setFormulario] = useState({
    //     email: "",
    //     nombre: "",

    // })
    // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    //     //target aparece en consola ,entonces buscamos el valor que esta tomando el input
    //     // console.log(ev.target.value);
    //     // console.log(ev.target.value);
    //     //osea email = name y lo ingresado = value
    //     const { name, value } = target;
    //     setFormulario({
    //         ...formulario,
    //         [name]: value
    //     })
    // }
    return (
        <form autoComplete="off">
            <div className="">
                <label>Email</label>
                <input type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={handleChange}

                />
            </div>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text"
                    className="form-control"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}

                />
            </div>
            <div className="mb-3">
                <label className="form-label">Edad:</label>
                    <input type="number"
                    className="form-control"
                    name="edad"
                    value={edad}
                    onChange={handleChange}

                />
                </div>
            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}