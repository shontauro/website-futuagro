import Header from './Header'
import Head from 'next/head'
import PropTypes from 'prop-types'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const MainLayout = (props) => (
  <div style={layoutStyle}>
    <Head>
      <title>Futuagro</title>
    </Head>
    <Header />
    {props.children}
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainLayout
