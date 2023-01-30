import { useReducer } from "react";

const initialState = {
    contador: 0,
}//action
type ActionType = 
|{type: "incrementar"}
|{type: "decrementar"}
|{type: "custom",payload:number};
//se crea un nuevo state y definimos el tipo




export const ContadorReducer = (state: typeof initialState , action: ActionType) => {

 switch (action.type) {
    case "incrementar":
        return{
            //me traigo todo el estado y abajo declaro  el nuevo estado
            ...state,
            contador:state.contador +1
        }
    case "decrementar":
        return{
            ...state,
            contador: state.contador -1
        }
        case "custom":
        return{
            ...state,
            contador: action.payload
        }
    default:
        return state;
 }
}

export const ContadorRed = () => {
const [{contador}, dispatch] = useReducer(ContadorReducer , initialState)

    return(
        <>
        <h2>Contador: {contador}</h2>
        <button 
        className="btn btn-outline-primary"
         onClick ={()=> dispatch({ type: "incrementar"})}>
            +1
        </button>
        <button 
        className="btn btn-outline-primary"
         onClick ={()=> dispatch({ type: "decrementar"})}>
            -1
        </button>
        <button 
        className="btn btn-outline-danger"
         onClick ={()=> dispatch({ type: "custom" ,payload:100})}>
           100
        </button>
        </>
    )
}