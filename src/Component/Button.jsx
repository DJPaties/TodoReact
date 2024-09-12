import React from "react"
export const  AddButton  = ({text,btnclass,onClick}) =>{
    return (
        <div className="AddButton">    
        <button className={btnclass} onClick={onClick} type="submit">
            {text}
        </button>
        </div>
    )
}

export  const  NavButton = ({text,btnclass,onClick,navImg}) =>{
    // const element = <FontAwesomeIcon icon="fa-kit fa-my-icon" />

    return (
        <div className="NavButton">
            <button className={btnclass} onClick={onClick} >
                    {navImg}
            </button>
        </div>
    )
}

export const TaskButtons = ({btnClass, onClick,taskImg}) =>{
    return(
    <div className="TaskButtons">
        <button className={btnClass} onClick={onClick}>
            {taskImg}
        </button>
    </div>
    )
}

// export default {AddButton, NavButton};
