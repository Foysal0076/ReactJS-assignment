import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import Header from './components/Header'
function App() {
    return (
        <Router>
            <main>
                <Header />
                <div className="container">
                    <Route exact path='/' component={HomeScreen} />
                    <Route exact path='/login' component={LoginScreen} />
                    <Route exact path='/register' component={RegisterScreen} />
                </div>
            </main>
        </Router>
    )
}

export default App
