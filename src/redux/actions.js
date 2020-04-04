import { COUNTER_CHANGE } from "./actionTypes";

export function changeCount(count) {
    console.log('inside action', count)
    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}