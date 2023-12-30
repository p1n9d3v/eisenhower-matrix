import AddTodoForm from "components/AddTodoForm";
import TodoFilter from "components/TodoFilter";
import TodoList from "components/TodoList";
import { TODO_STATUS } from "constant";
import { useState } from "react";
import styles from "./index.module.css";
import { v4 as uuidv4 } from "uuid";
import Space from "components/ui/Space";

const FILTERS = Object.keys(TODO_STATUS);

function Todos() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState(FILTERS[0]);

    const onAddTodo = (text) => {
        setTodos((prev) => [
            ...prev,
            {
                id: uuidv4(),
                text,
                status: TODO_STATUS.active,
            },
        ]);
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <TodoFilter
                    filters={FILTERS}
                    onFilter={(filter) => setFilter(filter)}
                />
                <Space height={10} />
                <AddTodoForm onAddTodo={onAddTodo} />
                <Space height={10} />
                <TodoList todos={todos} setTodos={setTodos} filter={filter} />
            </div>
        </div>
    );
}

export default Todos;
