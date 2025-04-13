import React, { useEffect, useState } from 'react'
import Base from '../components/Base'
import Orb from '../components/animation/Orb'
import SplitText from '../components/animation/SplitText'
import FallingText from '../components/animation/FallingText'

const Home = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000)
  });

  return (
    <Base>

      <div className='h-40'>This is home page</div>

    </Base>
  )
}

export default Home
