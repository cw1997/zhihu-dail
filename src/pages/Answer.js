import React, {Component} from 'react';
import { withRouter, BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import classNames from 'classnames'

import './Answer.sass';

import config from '../config'

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


export default
class Answer extends Component {
  id = this.props.match.params.id;
  // todayUrl = 'https://news-at.zhihu.com/api/4/news/:id' // id:3892357
  contentUrl = config.baseUrl + '/api/4/news/' + this.id;
  extraUrl = config.baseUrl + '/api/4/story-extra/' + this.id;
  constructor(props) {
    super(props);
    // console.info(this.props, this.contentUrl, this.extraUrl);
    this.state = {
      error: null,
      isLoaded: false,
      extra: {},
      content: {},
    };
  }
  componentDidMount() {
    fetch(this.contentUrl)
    // .then(res => JSON.parse(this.replaceUrl(JSON.stringify(res.json()))))
      .then(res => res.json())
      .then(
        (result) => {
          console.info(result);
          this.setState({
            isLoaded: true,
            content: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    fetch(this.extraUrl)
    // .then(res => JSON.parse(this.replaceUrl(JSON.stringify(res.json()))))
      .then(res => res.json())
      .then(
        (result) => {
          console.info(result);
          this.setState({
            isLoaded: true,
            extra: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    return (
      <div className="answer-warp">
        <link rel="stylesheet" type="text/css" href={this.state.content.css} />
        <HeaderWithRouter data={this.state.extra} />
        <Banner data={this.state.content} />
        <Content>{this.state.content.body}</Content>
      </div>
    )
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handlePush = this.handlePush.bind(this);
  }
  handlePush(targetUrl) {
    console.log(this.props);
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
            <IconButton className="header-more-btn" onClick={(e) => this.handlePush(this.props.match.url+'/comments', e)}  color="inherit">
              {/*<QuestionAnswerIcon />62*/}
              <i className="material-icons">
                comment
              </i>
              <div className="icon-num">{this.props.data.comments}</div>
            </IconButton>
            <IconButton className="header-more-btn" color="inherit">
              <i className="material-icons">
                thumb_up_alt
              </i>
              <div className="icon-num">{this.props.data.popularity}</div>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const HeaderWithRouter = withRouter(Header)

function Banner(props) {
  return (
    <div className="banner-warp">
      <div className="banner-list">
        {/*<BannerItem title={"也许，不是所有女性都适合做母亲，也不是所有女性都应当做母亲"} />*/}
        <BannerItem title={props.data.title} img={props.data.image} />
      </div>
      <div className="image-source">
        {props.data.image_source}
      </div>
    </div>
  )
}

function BannerItem(props) {
  return (
    <div className="banner-item-warp">
      <div className="banner-item-img">
        <img src={props.img} alt=""/>
      </div>
      <div className="banner-item-title">
        {props.title}
      </div>
    </div>
  )
}


class Content extends Component {
  createMarkup (props) { return {__html: props}; }
  render() {
    return (
      <div className="content-warp" style={{fontSize: '150%'}} dangerouslySetInnerHTML={this.createMarkup(this.props.children)}>
      </div>
    )
  }
}

// export default withStyles(styles)(Home);
