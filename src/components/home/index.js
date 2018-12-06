import React from 'react'

import {
  Landing
} from './sections'

const Home = ({ data }) => (
  <Landing {...data.landing}/>
)

export default Home
