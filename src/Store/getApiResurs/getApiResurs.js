import {getUsersFinish,getUsersStart} from "../action/action"




export const getApiResurs =(dispatch)=>{
    dispatch(getUsersStart())
    fetch('https://gorest.co.in/public/v2/users')
    .then(response => response.json())
    .then(data => {
            dispatch(getUsersFinish(data)) 
    })
}