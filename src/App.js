import {useEffect, useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setCounter(prev => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    useEffect(() => {
        console.log("I run only once.");
    }, []);
    useEffect(() => {
        console.log("I run when 'keyword' change");
    }, [keyword])
    useEffect(() => {
        console.log("I run when 'counter' change");
    }, [counter])
    useEffect(() => {
        console.log("I run when 'keyword' and 'counter' change");
    }, [keyword,counter])
    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Seach here..."/>
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;
