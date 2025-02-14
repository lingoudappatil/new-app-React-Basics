import { useState, useEffect } from "react";

function Useeffect() {
    const [count, setCounter] = useState(0); // ✅ Fixed useState instead of setState
    const [data, setData] = useState("Lingouda");

    useEffect(() => {
        console.log("Component Mounted");
    }, [data]);

    const updateCount = () => {
        setCounter(count + 1);
    };

    const updateData = () => {
        setData("Patil");
    };

    return (
        <>
            <h1>Button Clicked {count} times</h1>
            <button onClick={updateCount}>Click</button>
            <button onClick={updateData}>Update Data</button>
        </>
    );
}

export default Useeffect;
