import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route , Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';

//import routers
import LoginPage from './Pages/loginPage';
import HomePage from './Pages/homePage';

// import NotFound from './Pages/notFound';    //TODO : 404 bug need to fix


//routers controller
const AppRouter = () => 
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component = {LoginPage} />
            <Route exact path="/home" component={HomePage} />
            {/* <Route component= {NotFound} /> */}
        </Switch>
    </BrowserRouter>


ReactDOM.render(
    <AppRouter />, document.getElementById('root')
)

registerServiceWorker();