import {useState} from "react"


function Light(){

const [color, setColor] = useState("")
const [isOn, setIsOn] = useState(false)

// update ONBtn
const handleOn = ()=> {
    setColor("yellow")
    setIsOn(true)
}

// update OffBtn
const handleOff = ()=> {
    setColor("white")
    setIsOn(false)
}




    return <div className="flex justify-center mt-10 ">
        

<div>  

    <div style={{backgroundColor: color }} className="w-[400px] h-[400px] rounded-full mb-5 border-4 border-black ">

    </div>


<button onClick={handleOn} style={{backgroundColor: isOn == true ? "red" : ""}} className="bg-yellow-500 ml-20 px-3 py-2 text-3xl m-1 rounded ">ON</button>
<button onClick={handleOff} style={{backgroundColor: isOn == false ? "red" : ""}} className="bg-yellow-500 ml-20 px-3 py-2 text-3xl m-1 rounded">OFF</button>


</div>

 
    
    </div>
}

export default Light 