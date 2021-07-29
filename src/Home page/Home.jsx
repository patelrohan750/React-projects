import React from 'react'
import Card from './card'
import { useHistory } from "react-router-dom";


const Home = () => {
    const  history = useHistory();
    return (
        <div style={{backgroundColor:"#E2E8F0"}}>
        <div className="react_banner">
          <h1>React Js Projects</h1>
        </div>
        <div className="container mt100">
        <div className="cards">
        <Card image="images/counterApp.png" title="Counter App"
            onClickHandler={()=>{
                history.push('/counterapp')
            }}

        />
        <Card image="images/google keep Clone.png" title="Google Keep Clone"
             onClickHandler={()=>{
                history.push('/googlekeepclone')
            }}
        />
        <Card image="images/LifeCycleMethods.png" title="Life Cycle Methods"
             onClickHandler={()=>{
                history.push('/lifycycle')
            }}
        />
        <Card image="images/MultiStep forms.png" title="MultiStep Forms"
             onClickHandler={()=>{
                history.push('/multistepform')
            }}
        />
        <Card image="images/Netflix App.png" title="Netflix Clone"
             onClickHandler={()=>{
                history.push('/netflixcloneapp')
            }}
        />
        </div>
          
        </div>
        </div>
    )
}

export default Home
