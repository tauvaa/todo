import React from "react";
import { ListItem } from "../components/ListItem";
import { get_todo_items } from "../api/api";
const ItemList = ({ messages }) => {
    const toRet = messages.map((mes, i) => {
        return <ListItem key={i} message={mes} />;
    });
    return <div>{toRet}</div>;
};
const ToDo = () => {
    const [messages, setMessages] = React.useState([]);
    React.useEffect(() => {
        const fetchData = () => {
            get_todo_items((res) => {
                setMessages(res.data.data);
            });
        };
        fetchData();
    }, []);
    return (
        <div>
            <ItemList messages={messages} />
        </div>
    );
};

export { ToDo };
