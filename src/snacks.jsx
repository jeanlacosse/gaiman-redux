import { useSelector, useDispatch } from 'react-redux'

function Snacks() {

    const dispatch = useDispatch()

    const snacks = useSelector(store => store.snackList)
    // ^^ same syntax as below
    // const snacks = useSelector((store) => {
    //     return store.snackList;
    // });

    return (
        <>
            <h2>Snacks are: </h2>
            <div>
                {/* map over snacks and append a div for the props of the snack */}
                {
                    snacks.map(snack => (
                        <div key={snack.id}>{snack.name} is a snack with a rating of: {snack.rating}</div>
                    ))
                }
            </div>
        </>
    )

}

export default Snacks;