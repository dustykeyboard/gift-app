import People from '../containers/People'
import Gifts from '../containers/Gifts'
import Auth from '../containers/Auth'

const routes = [
  {
    path: '/',
    name: 'People',
    component: People
  },
  {
    path: '/person/:personUrl',
    name: 'Gifts',
    component: Gifts
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  }
]

export default routes
