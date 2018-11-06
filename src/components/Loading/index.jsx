import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const styles = {
  root: {
    height: '100vh',
  },
}

const Loading = () =>
  <Segment style={styles.root}>
    <Dimmer active inverted>
      <Loader active size="massive" inline="centered" />
    </Dimmer>
  </Segment>

export default Loading
