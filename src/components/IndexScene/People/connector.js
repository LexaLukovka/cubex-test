import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as auth from '../../../redux/auth/action'
import * as people from '../../../redux/people/action'

const initMapStateToProps = store => ({
  auth: store.authReducer,
  people: store.peopleReducer.filterPeople,
  currentPeople: store.peopleReducer.currentPeople,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(auth, dispatch),
    people: bindActionCreators(people, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
