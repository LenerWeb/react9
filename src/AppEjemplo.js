import { useState } from "react";

//El nombre debe iniciar con mayuscula
//el componente es una funcion, podemos crear usando arrow function o funcion declarativa

const PrimerComponente = () => {

    // react tiene una funcion llamda userState maneja el estado de la variable
    //se encarga de manejar el estado de una variable
    //para poder usar esa funcion se tiene que importar la funcion
    //al usar useState la forma en la cual una variable cambia
    //porque debemos definir 2 cosas primerop el niombre de la variable y segundo la funcion la cual cambia el estado
    //count: la variable va a mostrar un valor
    //setcount va a ser la funcion de asignarle otro valor a count
    
    //hook:
    const [count,setcount] = useState(0)

    const sumar = () => {
        setcount(count + 1);
    }
    const restar = () => {
        setcount(count - 1);
    }

    const parametros = (a,b)=>{
        setcount(a + b)
    }

    return (
        <div>

            <h1> este es mi componente {count}</h1>
            <h2>HOLLA DESDE EL COMPONENTE {parametros}</h2>
            <button onClick={sumar}>sumar {count}</button>
            <button onClick={restar}>restar</button>
            <button onClick={()=>parametros(10,20)}>calcular</button>

        </div>
    )

}

export default PrimerComponente;
