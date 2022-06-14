// useSelector is a hook, hooks always have something to do with states
// This one allows me to access redux state
import { useSelector, useDispatch } from 'react-redux'


function Counter() {
    // dispatch is function that can send messages to redux store
    // to my reducer functions
    const dispatch = useDispatch()

    // useSelector called when app renders, gives us entire redux store
    // only want to return the key state that I am using here ie: store.count
    const count = useSelector((store) => {
        return store.count;
    });

    const onIncrease = () => {
        // Dispatch a message to count reducer to increase count
        // message sent is called an action, I dispatch actions as arguments
        let action = {
            type: 'INCREASE_COUNT'
        }
        dispatch(action)
    }

    const onDecrease = () => {
        let action = {
            type: 'DECREASE_COUNT'
        }
        dispatch(action)
    }

    return (
        <>
            <h2>Counter Component</h2>

            <h5>The count is {count}</h5>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    )
}

export default Counter;