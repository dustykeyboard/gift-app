import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { goBack } from 'react-router-redux'

import Gifts from '../components/Gifts'
import { samplePeople, sampleGifts } from '../sampleData'


const mapStateToProps = (state, ownProps) => {
  const personUrl = ownProps.match.params.personUrl
  const { people, gifts } = state

  const person = (people ? people : samplePeople)
    .find(person => person.url === personUrl)
  const giftsForPerson = (gifts ? gifts : sampleGifts)
    .filter(gift => gift.person === person.id)

  return {
    person,
    giftsForPerson
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
