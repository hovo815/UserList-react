import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import {useEffect} from "react";
import {getApiResurs }from "./Store/getApiResurs/getApiResurs"
import Card from "./Components/Card/Card"
import {BrowserRouter} from "react-router-dom"

function App() {
  const dispatch = useDispatch()
  const usersList = useSelector((state) => state.users.usersList)
  const loader = useSelector((state) => state.users.loader)
  //console.log(usersList);
  //console.log(loader);
  useEffect(()=>{
  getApiResurs(dispatch)
},[])
  if(loader === true){
      return <div className='conteiner'><h1>loading...</h1></div>
  }
  
  return (
    <div className="App"> 
     {usersList.length > 0 && usersList.map((user)=>{
       return <Card  user={user} key={user.id}/>
     })} 
    </div>
  );
}



export default App;


