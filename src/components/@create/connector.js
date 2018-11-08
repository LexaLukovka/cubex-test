import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as people from '../../redux/people/action'
import location from '../../redux/location/action'

const initMapStateToProps = store => ({
  auth: store.authReducer,
  createForm: store.peopleReducer.form,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    people: bindActionCreators(people, dispatch),
    location: bindActionCreators(location, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
