//este archivo se crea para poder manipular diferentes form dentro de una pag
import { ChangeEvent ,useState} from "react"


//useForm es de tipo t:generico quiere decir que puede recibir/tener string y numero en su valoe
//export function useForm <T>(initState: T) {
export const useForm = <T extends Object>(initState: T) => {

    const [formulario, setFormulario] = useState(initState);




    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        setFormulario({
            ...formulario,
            [name]: value
        })
    }
      return{
        formulario,
        handleChange,
        ...formulario
      }


}