function App () {
    const [tasks, setTasks] = React.useState([
        {
            text: "MIT xPro Homework",
            support: "Week 14 Assignments",
            isDone: false,
            strikeID: "normal"
        },
        {
            text: "Hike with Mike",
            support: "Meet at Keys Gap",
            isDone: false,
            strikeID: "normal"
        },
        {
            text: "Dishes",
            support: "Daily",
            isDone: true,
            strikeID: "normal"
        },
        {
            text: "Make Dr Appt",
            support: "See email",
            isDone: false,
            strikeID: "normal"
        }
    ]);
    
    const addTask = (text, support) => {
        const newTasks = [...tasks, {text:text, support:support, isDone:false, strikeID:"normal"}];
        setTasks(newTasks);
    };

    const removeTask = (index) => {
        let temp = [...tasks];
        temp.splice(index, 1);
        setTasks(temp);
    };

    const strikeTask = (index) => {
        let temp = [...tasks];
        let sID = temp[index].strikeID;
        if (sID === "normal") {
            temp[index].strikeID = "strike";
        }
        if (sID === "strike") {
            temp[index].strikeID = "normal";
        }
        setTasks(temp);
    };

    return (
        <div className="task">
            
                {tasks.map((task, i) => (
                    <Task index={i} key={i} task={task} strike={strikeTask}/>))}          
                <TaskForm addTask={addTask}/>
            
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);