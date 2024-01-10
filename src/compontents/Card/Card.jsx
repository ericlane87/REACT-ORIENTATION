import {useState} from 'react'

//hooks


function Card(){

    const [myName,setMyName] = useState('Default');

function clickChangeName(){
   
    setMyName('Eric')
}

    return(
        <div className="card">
<button>0</button>
<p>{myName}</p>
<button onClick={clickChangeName}>Change Name</button>
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
    )
}



export default  Card