import { useAsync } from "src/hooks";

function AsyncComponent() {

    const { error, loading, value } = useAsync(() => {
        return new Promise((resolve, reject) => {
          const success = true;
    
          setTimeout(() => {
            success ? resolve("Success") : reject("Error!");
          }, 2000);
        })
      }, []);

  
    return (
        <div>
            <div>
                <h4>UseAsync</h4>
                <p>Result: {value ? value : error}</p>
                <p>Loading: {loading.toString()}</p>
            </div>
        </div>
    );
}

export default AsyncComponent;
