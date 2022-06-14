import { useState } from 'react'
import { useDispatch } from 'react-redux';

function SnackForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [rating, setRating] = useState(5)

    const onAddSnack = (evt) => {
        evt.preventDefault();

        // this will need to send a message and a payload
        // this b/cm the action in the index.js
        dispatch({
            type: 'ADD_SNACK',
            payload: {
                name,
                rating,
            }
        })
    }
    return (
        <>
            <h2>Snack form</h2>

            <form action=""
            onSubmit={onAddSnack}
            >
                <div>
                    <label htmlFor="">
                        Snack Name
                        <input type="text" 
                        placeholder="snack name" 
                        value={name}
                        onChange={evt => setName(evt.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        Rating
                        <input
                            type="range"
                            min='0'
                            max='10'
                            placeholder="Rating"
                            value={rating}
                            onChange={evt => setRating(Number(evt.target.value))}
                            />
                    </label>
                </div>
                <input type="submit" value="Add Snack" />
            </form>
        </>
    )
}
export default SnackForm