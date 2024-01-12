/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../pages/NewEmployeeForm'
import CurrentEmployees from '../pages/CurrentEmployees'
import { Provider } from 'react-redux'
import store from '../redux/store'

/**
 * Component : Handling the routing logic of the app.
 * @Component
 * @return ( <CustomRouter/> )
 */
function CustomRouter() {
    
    return(
        <Provider store={store}>
            <Router basename="/Schoolwork-P14-StateAdded/">
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/employee-list" element={<CurrentEmployees />} />
                </Routes>
            </Router>
        </Provider>
    )
}

export default CustomRouter