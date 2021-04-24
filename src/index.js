import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import './css/team.css';
import './css/good.css';
import './css/900.css';
import './css/1000-1400px.css';
import * as serviceWorker from './serviceWorker';
import Base from './components/pages/Base'
import Productpage from './components/pages/Productpage'
import Supportpage from './components/pages/Supportpage'
import Teampage from './components/pages/Teampage';
import Applicationpage from './components/pages/Applicationpage';
import Portfoliopage from './components/pages/Portfoliopage';
import Upcomingpage from './components/pages/Upcomingpage';
import Foodoerderingpage from './components/pages/Foodorderingpage';
import Eventandblogspage from './components/pages/Eventandblogspage';
import Servicepage from './components/pages/Servicepage';
import Wireframepage from './components/pages/Wireframepage';
import Blogpage from './components/pages/Blogpage';
import Videopage from './components/pages/Videopage';
import Userfooter from './components/global/Userfooter';
import { Layout } from 'antd';
import Headerstructure from './components/global/Headerstructure';
import Portfolio from './components/local/portfolio';
import Goods from './components/global/Goods';
import Display from './components/global/Display';
const { Header, Footer, Content } = Layout;
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header>
        <Headerstructure />
      </Header>
      <Switch>
        <Route path="/" exact component={Base} />
        <Route path="/support" exact component={Supportpage} />
        <Route path="/team" exact component={Teampage} />
        <Route path="/application" exact component={Applicationpage} />
        <Route path="/portfolio" exact component={Portfoliopage} />
        <Route path="/foodordering" exact component={Foodoerderingpage} />
        <Route path="/blogandevent" exact component={Eventandblogspage} />
        <Route path="/upcoming" exact component={Upcomingpage} />
        <Route path="/service" exact component={Servicepage} />
        <Route path="/wireframe" exact component={Wireframepage} />
        <Route path="/blog" exact component={Blogpage} />
        <Route path="/video" exact component={Videopage} />
        <Route path="/test" exact component={Goods}/>
      </Switch>
      <Footer >
        <Userfooter />
      </Footer>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
