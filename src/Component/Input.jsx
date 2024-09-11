import { useState } from "react"
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import { TaskButtons } from "./Button"
const AddInput = () =>{
    const [inputValue,setInputValue] = useState('');
    const handleOnchange = (event) =>{
        setInputValue(event.target.value)
    }
    return(
    <div className="AddInputTask">
        <label>
            
        <input
            className="AddInput"
            placeholder="Enter Task"
            onChange={handleOnchange}
            value={inputValue}
            type="text"
        />
        </label>
        <TaskButtons btnClass={'save-btn'} taskImg={<SaveIcon/>}/>
        <TaskButtons btnClass={'delete-btn'} taskImg={<DeleteIcon/>}/>
    </div>
    )
}

export default AddInput;