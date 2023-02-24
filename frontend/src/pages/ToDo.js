import { ListItem } from "../components/ListItem";
const ItemList = ({messages}) => {
    const toRet = messages.map((mes) => {
        return <ListItem message={mes} />;
    });
    return <div>{toRet}</div>;
};
const ToDo = () => {
    const messages = ["item 1", "item 2"]
    return (
        <div>
            <ItemList messages={messages} />
        </div>
    );
};

export { ToDo };
