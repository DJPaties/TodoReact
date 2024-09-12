import { AddInput } from "./Input";
import { AddButton } from "./Button";

const MainSection = () => {
    const handleFormInput = (event) =>{
        event.preventDefault();
        alert('Clicked')
    }

    return(
        <div className="main-container">
            <p style={{ fontFamily: "'Pacifico', cursive", fontWeight: 'bold' ,fontSize: 'xx-large'}}>Your ToDo List</p>
            <form onSubmit={handleFormInput}className="AddTaskForm">
                <AddInput/>
                <AddButton btnclass={'add-btn'} text={"Add Task"}/>
            </form>
        </div>
    )

}

export default MainSection;