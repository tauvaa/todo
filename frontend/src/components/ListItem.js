import React from "react";
import "./ListItems.css";
import { deleteToDoItem, EditToDoItem } from "../api/api";
const EditBox = ({ toDo, itemId }) => {
    const [txt, setTxt] = React.useState(toDo);
    return (
        <div className="ListItemEditBox">
            <input
                onChange={(e) => {
                    setTxt(e.target.value);
                }}
            ></input>
            <div>
                <button
                    onClick={() => {
                        EditToDoItem(itemId, { to_do_item: txt });
                        window.location.reload();
                    }}
                >
                    save
                </button>
            </div>
        </div>
    );
};
const ListItem = (props) => {
    const { message } = { ...props };
    const [showEdit, setShowEdit] = React.useState(false);
    const edit = showEdit ? (
        <EditBox toDo={message.to_do_item} itemId={message.to_do_id} />
    ) : (
        ""
    );
    const deleteItem = () => {
        deleteToDoItem(message.to_do_id);
        window.location.reload();
    };
    return (
        <div>
            <div className="ListItemsListItem">
                <div className="ListItemsItemText">{message.to_do_item}</div>
                <div className="ListItemsButtonGroup">
                    <button onClick={() => setShowEdit(true)}>edit</button>
                    <button onClick={() => deleteItem()}>delete</button>
                </div>
            </div>
            {edit}
        </div>
    );
};

export { ListItem };
