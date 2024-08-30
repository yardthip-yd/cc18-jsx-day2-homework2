function App() {
    const [counters, setCounters] = React.useState([
        { id: 1, number: 0 },
        { id: 2, number: 0 },
        { id: 3, number: 0 },
    ]);

    const updateCounter = (id, n) => {
        // console.log('id =', id)
        let index = counters.findIndex((element) => element.id === id);
        // console.log('counters array no.', idex)

        const newCounters = [...counters];
        newCounters[index].number += n;

        if (newCounters[index].number + n < 0) {
            return (newCounters[index].number = 0);
        }
        // console.log(newCounters)

        setCounters(newCounters);
    };

    const deleteCounter = (id) => {
        const newCounters = counters.filter((element) => element.id !== id);
        setCounters(newCounters);
    };

    const addCounter = () => {
        const newId = counters.length > 0 ? counters[counters.length - 1].id + 1 : 1;
        console.log(newId)
        setCounters([...counters, { id: newId, number: 0 }]);
    };

    const sumCounter = counters.reduce((prev, curr) => {
        return prev + curr.number;
    }, 0);

    return (
        <div className="app">
            <h1 className="show-sum">Sum = {sumCounter}</h1>
            {/* <button className="btn-add">Add Counter</button> */}
            <button onClick={addCounter} className="btn-add">
                Add Counter
            </button>
            <hr />
            {counters.map((element) => (
                <Counter
                    key={element.id}
                    item={element}
                    updateCounter={updateCounter}
                    deleteCounter={deleteCounter}
                />
            ))}
        </div>
    );
}

function Counter(props) {
    const { item, updateCounter, deleteCounter } = props;

    return (
        <div className="counter">
            <button
                onClick={() => updateCounter(item.id, -1)}
                className="btn btn-dec"
            >
                -
            </button>
            <h3 className="number">{item.number}</h3>
            <button onClick={() => updateCounter(item.id, 1)} className="btn btn-inc">
                +
            </button>
            <button
                onClick={() => updateCounter(item.id, -item.number)}
                className="btn btn-clr"
            >
                C
            </button>
            <button onClick={() => deleteCounter(item.id)} className="btn btn-del">
                X
            </button>
        </div>
    );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
