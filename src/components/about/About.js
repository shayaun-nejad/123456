import React from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import './about.scss';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row'
  }
};

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.root} id="root">
      <ReactTwitchEmbedVideo channel="Ninja" height={100} width={100} />
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
