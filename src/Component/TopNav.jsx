import { NavButton } from './Button';
import HomeIcon from '@mui/icons-material/Home';
import ContactIcon from '@mui/icons-material/ContactSupport';
import SignUpIcon from '@mui/icons-material/Login';

const TopNav = () =>{
    return(
    <div className="TopNav">
        <p style={{ fontFamily: "'Pacifico', cursive", fontWeight: 'bold' ,fontSize: 'xx-large'}}>ToDo List</p>

        <div className="TopNavLogo">
            <img className="TopNavLogoImg" src="assets\logo\ToDoLogo.png" alt="Top Nav ToDo List Logo"></img>
        </div>
        <div className="TopNavButtons">
            <NavButton text={"Home"} btnclass={"topnav-btn"} navImg={<HomeIcon className='homebtn'/>}/>
            <NavButton text={"Contact"} btnclass={"topnav-btn"} navImg={<ContactIcon/>}/>
            <NavButton text={"SignUP"} btnclass={"topnav-btn"} navImg={<SignUpIcon/>}/>
        </div>
    </div>
    )
}

export default TopNav;