import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as auth from '../../redux/auth/action'

const initMapStateToProps = store => ({
  auth: store.authReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(auth, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
