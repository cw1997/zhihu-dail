import React, {Component} from 'react';
import { withRouter, BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './Comment.sass';

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
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export default
function Comment() {
  return (
    <div className="comment-warp">
      <HeaderWithRouter />
      <ListTitle>36 条短评</ListTitle>
      <CommentList />
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
            <IconButton className="header-menu-btn" onClick={(e) => this.handlePush('/answer', e)} color="inherit" aria-label="Menu">
              {/*<MenuIcon />*/}
              <i className="material-icons">
                arrow_back
              </i>
            </IconButton>
            <Typography variant="h4" color="inherit" className="header-menu-title">
              27 条点评
            </Typography>
            {/*<Button color="inherit">Login</Button>*/}
            <div className="grow"/>
            {/*<IconButton className="header-notification-btn" color="inherit">*/}
            {/*<Badge badgeContent={1} color="secondary">*/}
            {/*<NotificationsIcon />*/}
            {/*</Badge>*/}
            {/*</IconButton>*/}
            <IconButton className="header-more-btn" color="inherit">
              {/*<MoreIcon />*/}
              <i className="material-icons">
                edit
              </i>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const HeaderWithRouter = withRouter(Header)

function ListTitle(props) {
  return (
    <div className="list-title-warp">
      {props.children}
    </div>
  )
}

function CommentList(props) {
  return (
    <div className="comment-list-warp">
      <CommentItem
        id={1}
        avatar={"#"}
        nickname={"昌维"}
        content={"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"}
        vote={6}
        datetime={"2019-05-15 00:11:31"}
      />
      <CommentItem
        id={1}
        avatar={"#"}
        nickname={"昌维"}
        content={"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"}
        vote={6}
        datetime={"2019-05-15 00:11:31"}
      />
      <CommentItem
        id={1}
        avatar={"#"}
        nickname={"昌维"}
        content={"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"}
        vote={6}
        datetime={"2019-05-15 00:11:31"}
      />
      <CommentItem
        id={1}
        avatar={"#"}
        nickname={"昌维"}
        content={"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"}
        vote={6}
        datetime={"2019-05-15 00:11:31"}
      />
      <CommentItem
        id={1}
        avatar={"#"}
        nickname={"昌维"}
        content={"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"}
        vote={6}
        datetime={"2019-05-15 00:11:31"}
      />
      <CommentItem
        id={1}
        avatar={"#"}
        nickname={"昌维"}
        content={"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"}
        vote={6}
        datetime={"2019-05-15 00:11:31"}
      />
      <CommentItem
        id={1}
        avatar={"#"}
        nickname={"昌维"}
        content={"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"}
        vote={6}
        datetime={"2019-05-15 00:11:31"}
      />
    </div>
  )
}

class CommentItem extends Component {
  constructor(props) {
    super(props)
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {

  }
  state = {
    menuState: false,
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    return (
      //<ButtonBase
      //  focusRipple
      //  key={this.props.id}
      //  className={"comment-item-warp"}
      //  focusVisibleClassName={""}
      //  onClick={this.handleClick}
      //>
        <div className="comment-item-warp">
          <div className="avatar-warp">
            <div className="avatar-img">
              <img src={this.props.avatar} alt=""/>
            </div>
          </div>
          <div className="content-warp">
            <div className="comment-header-warp">
              <div className="comment-nickname">
                {this.props.nickname}
              </div>
              <div className="comment-vote">
                <i className="material-icons">
                  thumb_up_alt
                </i>
                {this.props.vote}
              </div>
            </div>
            <div className="comment-content">
              {this.props.content}
            </div>
            <div className="comment-datetime">
              {this.props.datetime}
            </div>
          </div>
        </div>
      //</ButtonBase>
    )
  }
}
