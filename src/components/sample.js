import { useState } from "react";

const [todo, setTodo] = useState({
    text: 'Hello',
    done: false
});

const onClick = useCallback(() => {
    setTodo(
        produce(draft => {
            draft.done = !draft.done;
        })
    )
}, []);