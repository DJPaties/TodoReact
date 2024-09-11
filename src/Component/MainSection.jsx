import  AddInput  from "./Input";
import { AddButton } from "./Button";

const MainSection = () => {
    return(
        <div className="main-container">
            <p style={{ fontFamily: "'Pacifico', cursive", fontWeight: 'bold' ,fontSize: 'xx-large'}}>Your ToDo List</p>
            <AddInput/>
            <AddButton btnclass={'add-btn'} text={"Add Task"}/>
        </div>
    )

}

export default MainSection;