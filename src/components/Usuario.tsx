import {useState} from "react";

interface User {
    uid:string;
    name: string;
}



export const Usuario =() => {
//debo declarar el tipo de estado por eso el user 

    const [user , setUser] = useState<User>();

    const login = () => {
         setUser({
             uid: "ABC123",
             name: "Celeste Zavala"
         })
    }
    return(
        <div className="mt-5">
        <h3>Usuario: </h3>

        <button 
             onClick={login}
             className="btn btn-outline-primary">
             Login
        </button>
        {
            (!user)
            ?<pre>No hay usuario</pre>
            :<pre>{JSON.stringify(user)}</pre>
        }
        
        </div>
    )
}