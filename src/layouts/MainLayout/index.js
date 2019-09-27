import Header from '../Header'
import Footer from '../Footer'
import Meta from '../Meta'

import PropTypes from 'prop-types'

import '../../components/index.scss'

const MainLayout = (props) => (
  <div>
    <Meta pageTitle={'Futuagro'} />
    <Header />
    {props.children}
    <Footer />
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainLayout
