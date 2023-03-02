import "./ListItems.css";
import { deleteToDoItem } from "../api/api";
const ListItem = (props) => {
    const {message} = {...props}
    return (
        <div className="ListItemsListItem">
            <div className="ListItemsItemText">{message.to_do_item}</div>
            <div className="ListItemsButtonGroup">
                <button>edit</button>
                <button onClick={()=>{deleteToDoItem(message.to_do_id);
                window.location.reload()}}>delete</button>
            </div>
        </div>
    );
};

export { ListItem };
