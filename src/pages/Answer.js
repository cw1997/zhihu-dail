import React, {Component} from 'react';
import { withRouter, BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './Answer.sass';

import classNames from 'classnames'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import ButtonBase from '@material-ui/core/ButtonBase';
import MoreIcon from '@material-ui/icons/MoreVert';
import {QuestionAnswerIcon} from '@material-ui/icons';

const styles = {
  root: {
    // flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default
function Answer() {
  return (
    <div className="answer-warp">
      <HeaderWithRouter />
      <Banner />
      <Content>test</Content>
    </div>
  )
}

class Header extends Component {
  constructor(props) {
    super(props)
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handlePush = this.handlePush.bind(this);
  }
  handlePush(targetUrl) {
    this.props.history.push(targetUrl)
  }
  render() {
    return (
      <div className="header-warp">
        <AppBar position="static">
          <Toolbar className="nav-bar">
            <IconButton className="header-menu-btn" onClick={(e) => this.handlePush('/', e)}  color="inherit" aria-label="Menu">
              <i className="material-icons">
                arrow_back
              </i>
            </IconButton>
            {/*<Typography variant="h4" color="inherit" className="header-menu-title">*/}
            {/*首页*/}
            {/*</Typography>*/}
            {/*<Button color="inherit">Login</Button>*/}
            <div className="grow"/>
            {/*<IconButton className="header-notification-btn" color="inherit">*/}
            {/*<Badge badgeContent={1} color="secondary">*/}
            {/*<NotificationsIcon />*/}
            {/*</Badge>*/}
            {/*</IconButton>*/}
            {/*todo: icon edit*/}
            {/*<IconButton className="header-more-btn" color="inherit">*/}
            {/*<MoreIcon />*/}
            {/*</IconButton>*/}
            <IconButton className="header-more-btn" color="inherit">
              <i className="material-icons">
                share
              </i>
            </IconButton>
            <IconButton className="header-more-btn" color="inherit">
              <i className="material-icons">
                star_border
              </i>
            </IconButton>
            <IconButton className="header-more-btn" onClick={(e) => this.handlePush('/comment', e)}  color="inherit">
              {/*<QuestionAnswerIcon />62*/}
              <i className="material-icons">
                comment
              </i>
            </IconButton>
            <IconButton className="header-more-btn" color="inherit">
              <i className="material-icons">
                thumb_up_alt
              </i>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const HeaderWithRouter = withRouter(Header)

function Banner() {
  return (
    <div className="banner-warp">
      <div className="banner-list">
        <BannerItem title={"也许，不是所有女性都适合做母亲，也不是所有女性都应当做母亲"} />
      </div>
      <div className="image-source">
        Yestone.com 版权图片库
      </div>
    </div>
  )
}

class BannerItem extends Component {
  render() {
    return (
      <div className="banner-item-warp">
        <div className="banner-item-title">
          {this.props.title}
        </div>
      </div>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <div className="content-warp">
        {this.props.children}
      </div>
    )
  }
}

// export default withStyles(styles)(Home);
