import React, { Component } from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

import { createSession } from '../actions';
// import root from 'window-or-global';

export class Home extends Component {
  constructor() {
    super();

    this.state = {
      width: 500,
      height: 600
    };
  }
  static fetchData(store) {
    // Normally you'd pass action creators to "connect" from react-redux,
    // but since this is a static method you don't have access to "this.props".

    // Dispatching actions from "static fetchData()" will look like this (make sure to return a Promise):
    return store.dispatch(createSession({ id: 1, name: 'Cullen Jett' }));
  }

  render() {
    return (
      <div id="home">
        <div>
          <div id="liveMatch">
            <ReactTwitchEmbedVideo
              width={this.state.width}
              height={this.state.height}
              channel="Ninja"
            />
          </div>
          <div id="topSpreads">
            <Card id="cards">
              <CardContent>
                <p> -170 BuyBoyz vs. +180 HHHGNFORTZ </p>
              </CardContent>
            </Card>
            <Card id="cards">
              <CardContent>
                <p> -170 BuyBoyz vs. +180 HHHGNFORTZ </p>
              </CardContent>
            </Card>
            <Card id="cards">
              <CardContent>
                <p> -170 BuyBoyz vs. +180 HHHGNFORTZ </p>
              </CardContent>
            </Card>
            <Card id="cards">
              <CardContent>
                <p> -170 BuyBoyz vs. +180 HHHGNFORTZ </p>
              </CardContent>
            </Card>
          </div>
          <div id="homeNews">
            <h2> Recent News </h2>
            <Divider />
          </div>
        </div>

        <Card id="buyBox">
          <CardContent>
            <h6>Live Matches</h6>
            <Divider />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Home;
