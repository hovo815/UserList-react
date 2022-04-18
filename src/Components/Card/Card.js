import "./Card.css";


function Card({user}){
    console.log(user);
    
    const onclickEmail=()=>{
        alert(user.email)
    }
   
      
    
    return(
        <div className="container">
        <span className="container1">
        <table>{user.name}
        </table>
        </span>
       
        <span className="container2">
        <button  style={{backgroundColor:"skyblue",color:"grey" }} onClick={onclickEmail}>
         Email
        </button>
        </span>
       
        <span className="container3">
        <table>{user.gender}
        </table>
        </span>

        <span className="container4">
        <table>{user.status}
        </table>
        </span>
       
      
        </div>
    )
}

export default Card;







       