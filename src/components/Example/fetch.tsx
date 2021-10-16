import { useState } from 'react';
import { useFetch } from "src/hooks";

import { Button } from "src/components/Inputs";

function FetchComponent() {

    const [id, setId] = useState(1);

    const increment = () => setId(id + 1);

    const { error, loading, value } = useFetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
            method: 'GET'
        },
        [id]
    );

  
    return (
        <div>
            <h4>UseFetch</h4>
            <Button name="Increment ID" click={increment} disabled={loading} />
            <div>
                <p>Loading: {loading.toString()}</p>
                <div>{JSON.stringify(error, null, 2)}</div>
                <div>{JSON.stringify(value, null, 2)}</div>
            </div>
        </div>
    );
}

export default FetchComponent;
