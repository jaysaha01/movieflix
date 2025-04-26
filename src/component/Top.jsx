import React from 'react'
import Banner from './Banner'
import Header from './Header'
import Tranding from './Tranding'
import Borderband from './Borderband'



const Top = () => {
  return (
    <div className='parentbx'>
        <Header/>
        <Banner/>
        <Borderband />
        <Tranding/>
    </div>
  )
}

export default Top
