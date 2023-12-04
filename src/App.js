import {useState} from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => {
        setToDo(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos(prev => [toDo, ...prev]);
        setToDo("");
    }
    const onClick = (index) => {
        console.log(index);
        setToDos(prev => {
            console.log(prev);
            prev.splice(index, 1);
            console.log(prev);
            return [...prev];
        });
    }
    return (
        <div>
            <h1>My To Dos {toDos.length}</h1>
            <form onSubmit={onSubmit}>
                <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do..."/>
                <button>Add To Do</button>
            </form>
            <hr/>
            <ul>
                {toDos.map((toDo, index) => (
                    <div key={index}>
                        <li>{toDo}</li>
                        <button onClick={() => onClick(index)}>X</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default App;
