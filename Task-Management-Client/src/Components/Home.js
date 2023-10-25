import { useEffect, useState } from 'react';

const Home = () => {
    const [check, setCheck] = useState(false)
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    const handleTaskSubmit = e => {
        e.preventDefault()
        const task = e.target.task.value;
        const tasks = {
            task: task,
            status: "uncompleted"
        }

        // send data to the server
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                // alert
                alert('users added successfully')
                // reset input
                e.target.reset();
            })
    }
    return (
        <div>
            {/* Add Task */}
            <div className="">
                <h1 className="text-center">Add Task</h1>
                <form onSubmit={handleTaskSubmit} class="form-control w-full sm:w-[40vw] mx-auto">
                    <label class="input-group">
                        <input type="text" name='task' placeholder="Add Your Task" class="input input-bordered w-full" />
                        <input className='btn' type="submit" value={"Add"} />
                    </label>
                </form>
            </div>
            {/* end add task */}
            {/* ------show data--------- */}

            <div className="mt-10 bg-white dark:bg-gray-900">
                <div class="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border border-blue-500 cursor-pointer rounded-xl">
                    <div class="">
                        <input type="checkbox" checked={check} onClick={() => setCheck(true)} class="checkbox" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;