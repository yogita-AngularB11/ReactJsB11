import React, { useState, useCallback } from 'react';
import Tasks from './Tasks';

const ParentCallback = () => {
    const [count, setCount] = useState(0);
    const [tasks, setTasks] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    // const addTask = ()=>{
    //     setTasks((t) => [...t, "New Task"]);
    // }

    const addTask = useCallback(() => {

        setTasks((t) => [...t, "New Task"]);

    }, [tasks]);

    return (
        <div>
            <div className="first">
                <Tasks tasks={tasks} addTask={addTask} />
            </div>

            <div className="second">
                Count: {count}
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
};
export default ParentCallback;
