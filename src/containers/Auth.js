import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { goBack } from 'react-router-redux'

import Gifts from '../components/Gifts'

const mapStateToProps = (state, ownProps) => {
  const personUrl = ownProps.match.params.personUrl
  const { people, gifts } = state
  return {
    person: people.find(person => person.id === personUrl),
    gifts: gifts.filter(gift => gift.person === personUrl)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goBack: () => {
      dispatch(goBack())
    }
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Gifts))
