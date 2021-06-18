import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {
    return (
        <Router>
            <main>
                <div className="container">
                    <Route exact path='/home' component={HomeScreen} />
                    <Route exact path='/login' component={LoginScreen} />
                    <Route exact path='/register' component={RegisterScreen} />
                </div>
            </main>
        </Router>
    )
}

export default App
