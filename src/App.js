import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


import './App.css';

import Home from './pages/Home'
import Answer from './pages/Answer'
import Comment from './pages/Comment'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#00a2ed',
      main: '#00a2ed',
      // dark: '#002884',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      {/*<Node/>*/}
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/answer/:id" component={Answer} />
            <Route path="/comment" component={Comment} />
            {/*<Home/>*/}
            {/*<Answer/>*/}
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
