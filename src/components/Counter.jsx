import react, {useState} from 'react'

const Counter = () => {
    const [num, setNum] = useState(0);

    return (
    <div>{num}
    <button onClick={() => setNum(n => n+1)}>Increment Counter</button>

    </div>
    )
}



export default Counter;