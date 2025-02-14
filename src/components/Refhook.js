import { useRef, useState } from "react";

function Refhook() {
    const ReElement = useRef(null); // ✅ Fixed default value (useRef(null))
    const [name, setName] = useState("Lingouda");

    console.log(ReElement);

    const Reset = () => {
        ReElement.current.focus(); // ✅ Fixed ref name
    };

    const handleInput = () => {
        ReElement.current.style.color = "red"; // ✅ Fixed ref name
    };

    return (
        <>
            <h1>Learning UseRef</h1>
            <input 
                ref={ReElement} 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <button onClick={Reset}>Reset</button>
            <button onClick={handleInput}>Handle Input</button>
        </>
    );
}

export default Refhook;
