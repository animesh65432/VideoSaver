import React from 'react'
import { Provider } from "react-redux"
import { Navbar } from "../components"
import store from "../store"

type Props = {
    children: React.ReactNode
}
const StateProvider: React.FC<Props> = ({ children }) => {
    return (
        <Provider store={store}>
            <Navbar />
            {children}
        </Provider>
    )
}

export default StateProvider