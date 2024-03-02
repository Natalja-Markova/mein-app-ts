import  './styles.css';
import {v4} from 'uuid';

function Homework20() {
    let firstName: string = "John";
    let lastName: string = "Doe";
    let fullName: string = `${firstName} ${lastName}`;
    let job: string = "Softwere Engineer";
    let isManager: boolean = false;
    let experience: number = 5;
    let email: string = "john.doe@google.com";
    let programLangs:string[] = ["JavaScript",
    "Python", 
    " Maschine-Learning",
    "Java",
     "C++"];

    const langsElements= programLangs.map((lang:string)=>{
     return (<li  key= {v4()} className="program-lang">{lang}</li>
     );
    });

    return(
    <div className="homework20-wrapper">
        <div className="user-card">
            <p className="card-title>">User card</p>
            <p className="user-name">{fullName}</p>
            <div className="card-info">
                <p className="card-info-name">Job:</p>
                {job}
            </div>
            <div className="card-info">
                <p className="card-info-name">Role</p>
                {isManager ? "Manager" : "Employee"}
            </div>
            <div className="card-info">
                <p className="card-info-name">Experience</p>
                {experience} years
            </div>
            <div className="card-info">
                <p className="card-info-name">Email</p>
                {email}
            </div>  
            <p className="card-info card-info-name">Program languages:</p>   
            <ul className="langs-list">
                {/* <li className="program-lang">{programLangs[0]}</li>
                <li className="program-lang">{programLangs[1]}</li>
                <li className="program-lang">{programLangs[2]}</li> */}
                {langsElements}
            </ul>
        </div>
    </div> 
    );
}
export default Homework20; 