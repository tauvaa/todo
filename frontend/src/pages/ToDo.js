import React from "react";
import { ListItem } from "../components/ListItem";
import { get_todo_items, addToDoItem } from "../api/api";
const ItemList = ({ messages }) => {
    const toRet = messages.map((mes, i) => {
        return <ListItem key={i} message={mes} />;
    });
    return <div>{toRet}</div>;
};
const AddForm = () => {
    const [toAdd, setToAdd] = React.useState("");
    return (
        <div className="toDoAddForm">
            <input
                onChange={(e) => {
                    setToAdd(e.target.value);
                }}
            ></input>
            <button
                onClick={() => {
                    addToDoItem(toAdd);
                    window.location.reload();
                }}
            >
                Add To Do
            </button>
        </div>
    );
};
const ToDo = () => {
    const [messages, setMessages] = React.useState([]);
    const [showAdd, setShowAdd] = React.useState(false);
    React.useEffect(() => {
        const fetchData = () => {
            get_todo_items((res) => {
                setMessages(res.data.data);
            });
        };
        fetchData();
    }, []);
    const AddButton = () => {
        return (
            <div>
                <button onClick={() => setShowAdd(true)}>Add Item</button>
            </div>
        );
    };
    return (
        <div>
            {showAdd ? <AddForm /> : <AddButton />}
            <ItemList messages={messages} />
        </div>
    );
};

export { ToDo };
