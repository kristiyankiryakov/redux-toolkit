import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../state/store';
import {decrement, increment, incrementByAmount} from '../state/counter/counterSlice';

const Counter = () => {

    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            {count}
            <div>
                <button onClick={() => dispatch(increment())} >Increment</button>
                <button onClick={() => dispatch(decrement())} >Decrement</button>
                <button onClick={() => dispatch(incrementByAmount(10))} >Increment by 10</button>
            </div>
        </div>
    )
}

export default Counter