import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Thanks = () => (
  <Layout>
    <div style={{
      margin: '80px 0'
    }}>
      <div>Gracias!</div>
      <Link to='/'>← Home</Link>
    </div>
  </Layout>
)

export default Thanks
