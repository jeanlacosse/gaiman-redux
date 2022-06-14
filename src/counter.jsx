// useSelector is a hook, hooks always have something to do with states
// This one allows me to access redux state
import { useSelector } from 'react-redux'


function Counter () {
// useSelector called when app renders, gives us entire redux store
    const count = useSelector((store) => {
        return store;
    });

    console.log('useSselector returned', count)
    return (
        <>
        <h2>Counter Component</h2>

        <h5>The count is {count}</h5>
        </>
    )
}

export default Counter;