// import { AddInput, EditInput } from "./Input";
// import { AddButton } from "./Button";
// import { useState } from "react";

// const MainSection = () => {
//     const [valueInput, setValueInput] = useState('');
//     const [valueInputEdit, setValueInputEdit] = useState('');
//     const [tasks, setTasks] = useState([]);

//     const handleFormInput = (event) => {
//         event.preventDefault();
//         if (valueInput.trim() !== '') {
//             setTasks(tasks => [...tasks, valueInput]);
//             setValueInput(''); // Clear input after adding
//         } else {
//             alert("Task is empty");
//         }
//     };

//     const handleValueChange = (event) => {
//         setValueInput(event.target.value);
//     };

//     const handleValueEditChange = (event) => {
//         setValueInputEdit(event.target.value);
//     };

//     return (
//         <div className="main-container">
//             <p style={{ fontFamily: "'Pacifico', cursive", fontWeight: 'bold', fontSize: 'xx-large' }}>
//                 Your ToDo List
//             </p>

//             <form onSubmit={handleFormInput} className="AddTaskForm">
//                 <AddInput handleOnchange={handleValueChange} inputValue={valueInput} />
//                 <AddButton btnclass={'add-btn'} text={"Add Task"} />
//             </form>

//             <div className="ToDo-List">
//                 {tasks.map((task, index) => (
                    
//                     <EditInput 
//                         key={index}  // Important: always add a unique key when rendering lists
//                         indexId = {index}
//                         handleOnchange={handleValueEditChange} 
//                         inputValue={task} 
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MainSection;

import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import { TaskButtons } from "./Button";
import { Input } from "./Input";
import { AddButton } from "./Button";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // For generating unique task IDs

const MainSection = () => {
    const [valueInput, setValueInput] = useState('');
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');

    const handleFormInput = (event) => {
        event.preventDefault();
        if (valueInput.trim() === '') {
            setError("Task cannot be empty");
            return;
        }
        setError('');
        setTasks([...tasks, { id: uuidv4(), text: valueInput, isEditing: false }]);
        setValueInput('');
    };

    const handleValueChange = (event) => {
        setValueInput(event.target.value);
    };

    const handleTaskChange = (index, newValue) => {
        setTasks(tasks.map((task, idx) => 
            idx === index ? { ...task, text: newValue } : task
        ));
    };

    const toggleEdit = (index) => {
        setTasks(tasks.map((task, idx) => 
            idx === index ? { ...task, isEditing: !task.isEditing } : task
        ));
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, idx) => idx !== index));
    };

    return (
        <div className="main-container">
            <p style={{ fontFamily: "'Pacifico', cursive", fontWeight: 'bold', fontSize: 'xx-large' }}>
                Your ToDo List
            </p>

            <form onSubmit={handleFormInput} className="add-task-form">
                <Input handleOnchange={handleValueChange} inputValue={valueInput} placeholder="Enter Task" />
                <AddButton btnclass={'add-btn'} text={"Add Task"} />
            </form>

            {error && <p className="error">{error}</p>} {/* Display error message */}

            <div className="todo-list">
                {tasks.map((task, index) => (
                    <div key={task.id} className="todo-item">
                        {task.isEditing ? (
                            <Input 
                                handleOnchange={(e) => handleTaskChange(index, e.target.value)} 
                                inputValue={task.text} 
                                placeholder="Edit Task"
                            />
                        ) : (
                            <p>{task.text}</p>
                        )}
                        
                        
                        <div className="InputButtonContainer">
                            <TaskButtons btnClass={'save-btn'} taskImg={task.isEditing ? <SaveIcon/>: <EditIcon/>} onClick={()=>toggleEdit(index)}/>
                            <TaskButtons btnClass={'delete-btn'} taskImg={<DeleteIcon/>} onClick={() => deleteTask(index)}/>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainSection;
