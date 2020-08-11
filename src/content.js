import React,{useState, useEffect} from "react";

const data=[
    {
        "id":1,
        "name":"Event 1",
        "price":12
    },
    {
        "id":2,
        "name":"Event 2",
        "price":11
    },
    {
        "id":3,
        "name":"Event 3",
        "price":15
    }
]
const Content=()=>{
    const [events, setEvents]  = useState([])
    useEffect(()=>{
        setEvents(data)
    },[])

    return (
        <div className='main-content'>
            <h1>
                Explore Virtual Events
            </h1>
            <ul>
                {
                events.map(d=>{
                    return(
                    <li key={d.id} classname='event-list'>
                        <a href='#'>{d.name} - ${d.price}</a></li>
                    )
                })
            }
            </ul>
        </div>
    )
}
export default Content