import "./ListItems.css";
const ListItem = (props) => {
    const {message} = {...props}
    return (
        <div className="ListItemsListItem">
            <div className="ListItemsItemText">{message.to_do_item}</div>
            <div className="ListItemsButtonGroup">
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    );
};

export { ListItem };
