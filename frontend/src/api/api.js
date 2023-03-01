import axios from "axios";

const URL = "http://172.18.0.12:8000";

const get_todo_items = (callback) => {
    axios.get(`${URL}/todo/`).then((e) => callback(e));
};

export { get_todo_items };
