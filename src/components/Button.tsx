import { useState } from "react";

export function Button() {
    const [counter, setcounter] = useState(0)
   
    function increment() {
        setcounter(counter + 1) ;
        console.log(counter);
    }
    return (
        <button onClick={increment}>
            {counter}
            </button>
    )
}
// named export