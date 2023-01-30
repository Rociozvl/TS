import {useState ,useEffect ,useRef} from "react";

type TimerArgs ={
    milisegundos: number
}

export const Timer = ({milisegundos} : TimerArgs)=> {
    const [segundos , setSegundos] = useState(0)
    //useRef tiene como tipo de dato, undefined entonces debemos declararle un valor acompañado de nodejs
    const ref = useRef<NodeJS.Timeout>()

         useEffect(()=>{
        //clearInterval siempre debe recibir una fnc
         ref.current && clearInterval(ref.current);

         ref.current = setInterval(()=> setSegundos(s => s + 0) , milisegundos)
    },[])
    return (
        <>
        <h4>Timer: <small>{segundos}</small></h4>
        </>
    )
}