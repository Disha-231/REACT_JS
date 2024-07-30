import { createContext, useContext, useState } from "react";

const CounterContext = createContext()
const CounterProvider = ({ children }) => {
    const [no, setNo] = useState(0)
    const increment = () => {
        setNo(no + 1)
    }
    const decrement = () => {
        setNo(no - 1)
    }
    return (
        <CounterContext.Provider value={{ no, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    )
}
const useCounter = ()=>{
    return useContext(CounterContext)
}
export { CounterProvider, useCounter }