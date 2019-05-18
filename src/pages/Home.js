import React, {Component} from 'react';
import { withRouter, BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import classNames from 'classnames'

import './Home.sass';

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
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Menu from "@material-ui/core/Menu/Menu";


export default
class Home extends Component {
  // todayUrl = 'https://news-at.zhihu.com/api/4/news/latest'
  todayUrl = config.baseUrl + '/api/4/news/latest';
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: {
        date: '', // 20140523
        stories: [], // date: pic, title, link
        top_stories: [], // date: pic, title, link
      }
    };
  }
  replaceUrl = (srcUrl) => {
    return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
  }
  componentDidMount() {
    fetch(this.todayUrl)
      // .then(res => JSON.parse(this.replaceUrl(JSON.stringify(res.json()))))
      .then(res => res.json())
      .then(
        (result) => {
          console.info(result);
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        // 注意：需要在此处处理错误
        // 而不是使用 catch() 去捕获错误
        // 因为使用 catch 去捕获异常会掩盖掉组件本身可能产生的 bug
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
      <div className="home-warp">
        <Header/>
        <Banner data={this.state.data} />
        <NewsList data={this.state.data} />
      </div>
    )
  }
}


class Header extends Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  // const sidebar = (
  //   <SwipeableDrawer
  //     open={this.state.left}
  //     onClose={this.toggleDrawer('left', false)}
  //     onOpen={this.toggleDrawer('left', true)}
  //   >
  //     <div
  //       tabIndex={0}
  //       role="button"
  //       onClick={this.toggleDrawer('left', false)}
  //       onKeyDown={this.toggleDrawer('left', false)}
  //     >
  //       {SidebarContent}
  //     </div>
  //   </SwipeableDrawer>
  // )

  render() {
    const sidebar = (
      <div className="sidebar-warp">
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    )
    return (
      <div className="header-warp">
        <AppBar position="static">
          <Toolbar className="nav-bar">
            <IconButton className="header-menu-btn" onClick={this.toggleDrawer('left', true)} color="inherit"
                        aria-label="Menu">
              <MenuIcon/>
            </IconButton>
            <SwipeableDrawer
              open={this.state.left}
              onClose={this.toggleDrawer('left', false)}
              onOpen={this.toggleDrawer('left', true)}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
              >
                {sidebar}
              </div>
            </SwipeableDrawer>
            <Typography variant="h4" color="inherit" className="header-menu-title">
              首页
            </Typography>
            {/*<Button color="inherit">Login</Button>*/}
            <div className="grow"/>
            <IconButton className="header-notification-btn" color="inherit">
              <Badge badgeContent={6} color="secondary">
                <NotificationsIcon/>
              </Badge>
            </IconButton>
            <IconButton className="header-more-btn" color="inherit">
              <MoreIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function Banner(props) {
  const top_stories = props.data.top_stories.map(
    item => (
      <BannerItem img={item.img} title={item.title} />
    )
  );
  return (
    <div className="banner-warp">
      <div className="banner-list">
        <BannerItem title={"也许，不是所有女性都适合做母亲，也不是所有女性都应当做母亲"} />
        {/*{top_stories}*/}
      </div>
      <div className="banner-dot">
        <BannerDot />
        <BannerDot selected={true} />
        <BannerDot />
        <BannerDot />
        <BannerDot />
      </div>
    </div>
  )
}

class BannerDot extends Component {
  render() {
    return (
      <div className={classNames({'banner-dot-warp': true, 'banner-dot-selected': this.props.selected})}>
      </div>
    )
  }
}

function BannerItem(props) {
  return (
    <div className="banner-item-warp">
      <div className="banner-item-img">
        <img src={props.image} alt=""/>
      </div>
      <div className="banner-item-title">
        {props.title}
      </div>
    </div>
  )
}

function NewsList(props) {
  const stories = props.data.stories.map(
    item => (
      <NewsItemWithRouter id={item.id} title={item.title} img={item.images[0]} />
    )
  );
  return (
    <div className="news-list-warp">
      <div className="news-list-label">
        今日热闻
      </div>
      <div className="news-list">
        {/*<NewsItemWithRouter title={"小事·天上掉馅饼，但他接住了"} pic={"#"} />*/}
        {stories}
      </div>
    </div>
  )
}

class NewsItem extends Component {
  constructor(props) {
    super(props);
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id) {
    // console.log(this.props)
    this.props.history.push('/answer/' + id)
  }
  render() {
    return (
      //<Link to={"/answer"}>
        <ButtonBase
          focusRipple
          key={this.props.title}
          className={"news-item-warp"}
          focusVisibleClassName={""}
          onClick={(e) => this.handleClick(this.props.id, e)}
        >
          <div className="news-item-warp">
            <div className="news-item-title">
              {this.props.title}
            </div>
            <div className="news-item-pic">
              <img className="news-item-img" src={this.props.img} alt=""/>
            </div>
          </div>
        </ButtonBase>
      //</Link>
    )
  }
}
const NewsItemWithRouter = withRouter(NewsItem);



// export default withStyles(styles)(Home);
