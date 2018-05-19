import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import TodayView from './components/today-view';
import registerServiceWorker from './registerServiceWorker';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <AppBar
            title="My to-do App"
            onLeftIconButtonClick={this.handleToggle}
          />
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
          <Link to="/today"><MenuItem onClick={this.handleClose}>Hoy</MenuItem></Link>
          <Link to="/week"><MenuItem onClick={this.handleClose}>Esta Semana</MenuItem></Link>
          <Link to="/month"><MenuItem onClick={this.handleClose}>Este Mes</MenuItem></Link>
          </Drawer>
          <Switch>
            <Route exact path='/today' component={TodayView}/>
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
