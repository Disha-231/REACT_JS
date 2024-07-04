let initialstate = 0
const CounterReduser = (state = initialstate, Action) => {
    switch (Action.type) {
        case 'inc':
            return state + 1;

        case 'Dnc':
            return state - 1;

        default:
            return state
    }
}
export default CounterReduser