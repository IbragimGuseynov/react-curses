import {StoreContext} from "./context";
import {useContext, useState, useEffect} from "react"

export const useSelector = (select) => {
    const store = useContext(StoreContext);
    const [value, setValue] = useState(() => select(store.getState()))

    useEffect(() => {
        const setSelect = (state) => setValue(select(state));
        store.subscribe(setSelect)

        return() => store.unsubscribe(setSelect)
    }, [store, select])

    return value
}
