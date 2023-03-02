import axios from "axios";

const URL = "http://172.18.0.12:8000";

const get_todo_items = (callback) => {
    axios.get(`${URL}/todo/`).then((e) => callback(e));
};

const addToDoItem = (toAdd) => {
    const data = { to_do_item: toAdd };
    axios.post(`${URL}/todo/`, data);
};

const deleteToDoItem = (itemId) => {
    const durl = `${URL}/todo/${itemId}/`;
    axios.delete(durl);
};

const EditToDoItem = (itemId, editData) =>{

    const durl = `${URL}/todo/${itemId}/`;
    axios.put(durl, editData);
}

export { get_todo_items, addToDoItem, deleteToDoItem ,EditToDoItem};
