export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

export const REQUEST = "REQUEST";
export const RECEIVE = "RECEIVE";

const request = () => {
    return {
        type: REQUEST,
    }
} 

const receive = (val) => {
    return {
        type: RECEIVE,
        isIncrement: val
    }
}

export function asyncIncrement() {
    return dispatch => {
        dispatch(request());
        return new Promise(resolve => {
            setTimeout( () => {
                resolve(increment());
            }, 1000)
        }).then( (val) => {
            dispatch(receive(val));
        })
    }
}

export function asyncDecrement() {
    return dispatch => {
        dispatch(request());
        return new Promise(resolve => {
            setTimeout( () => {
                resolve(decrement());
            }, 1000)
        }).then( (val) => {
            dispatch(receive(val));
        })
    }
}