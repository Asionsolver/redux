import { connect } from "react-redux";

import { increment, decrement } from './../redux/counter/action';
import Counter from './../../../../redux-toolkit/src/components/Counter';

function Counter({count, increment, decrement}) {
    
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

const mapStateToProps=(state, ownProps)=>{
    console.log(ownProps);
    return{
        count:state.value,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        increment: (value) => dispatch(increment(5)),
        decrement: (value) => dispatch(decrement(3)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// arguments is Counter
// parameters is mapStateToProps, mapDispatchToProps