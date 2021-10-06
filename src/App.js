
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Login/Login';
import Register from './Register/Register';
import {BrowserRouter ,Route ,Switch} from 'react-router-dom'
import dashboard from './Dashboard/Dashboard';
import {persistStore , persistReducer} from  'redux-persist'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './reducer/rootReducer';
import {createStore} from 'redux'
import { Provider } from  'react-redux';
import Navbar from './Components/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


function App() {

  const persistConfig ={

    key : 'root',
    storage
  }

  const persistedReducer = persistReducer(persistConfig , rootReducer)
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)

  return (
    <div className="App">
  
        <Provider store={store} >

            <PersistGate persistor={persistor} >

                    <BrowserRouter>

                    <Navbar/>
                    
                        <Switch>

                                <Route path='/' component={Home} exact/>
                                <Route path='/about' component={About} exact/>
                                <Route path='/contact' component={Contact} exact/>
                                
                                <Route path="/login" component={Login} exact/>
                                <Route path='/register' component={Register} exact/>
                                <Route path='/dashboard' component={dashboard} exact/>
                              

                        </Switch>


                    </BrowserRouter>

            </PersistGate>


        </Provider>



     
     
        
    </div>
  );
}

export default App;

