import { useState, useEffect } from "react";

function Useeffect() {
    const [count, setCounter] = useState(0); // ✅ Corrected useState
    const [data, setData] = useState("Lingouda"); // ✅ Default name

    useEffect(() => {
        console.log("Component Mounted");
    }, [data]);

    const updateCount = () => {
        setCounter(count + 1);
    };

    const updateData = () => {
        setData((prev) => (prev === "Lingouda" ? "Patil" : "Lingouda")); // ✅ Toggle between names
    };

    return (
        <>
            <h1>Button Clicked {count} times</h1>
            <h2>Name: {data}</h2> {/* ✅ Display dynamic name */}
            <button onClick={updateCount}>Click</button>
            <button onClick={updateData}>Update Data</button>
        </>
    );
}

export default Useeffect;
