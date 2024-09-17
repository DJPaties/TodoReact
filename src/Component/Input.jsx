// import SaveIcon from '@mui/icons-material/Save'
// import DeleteIcon from '@mui/icons-material/Delete'
// import { TaskButtons } from "./Button"

// export const AddInput = ({handleOnchange , inputValue }) =>{
//     // const [inputValue,setInputValue] = useState('');
//     // const handleOnchange = (event) =>{
//     //     setInputValue(event.target.value)

//     // }

//     return(
//     <div className="AddInputTask">
//         <label>
            
//         <input
//             className="AddInput"
//             placeholder="Enter Task"
//             onChange={handleOnchange}
//             value={inputValue}
//             type="text"
//         />
//         </label>

//     </div>
//     )
// }


// export const EditInput = ({handleOnchange ,inputValue,indexId}) =>{
//     console.log(indexId)

//     return(
//     <div className="AddInputTask">
//         <label>
            
//         <input
            
//             className="AddInput"
//             placeholder="Enter Task"
//             onChange={handleOnchange}
//             value={inputValue}
//             type="text"
//         />
//         </label>
//         <div className="InputButtonContainer">
//             <TaskButtons btnClass={'save-btn'} taskImg={<SaveIcon/>}/>
//             <TaskButtons btnClass={'delete-btn'} taskImg={<DeleteIcon/>}/>
//         </div>
//     </div>
//     )
// }

// // export default AddInput;



export const Input = ({ handleOnchange, inputValue, placeholder }) => (
    <div className="input-task">
        <label>
            <input
                className="input"
                placeholder={placeholder}
                onChange={handleOnchange}
                value={inputValue}
                type="text"
            />
        </label>
    </div>
);
