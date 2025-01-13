import React from 'react'
import Container from '../components/Container'
import BreadCrumb from '../components/BreadCrumb'
import CardSection from '../components/CardSection'

const MyCart = () => {
  return (
    <Container className="flex-grow">
        <BreadCrumb currentPageTitle="My Cart" />
        <CardSection />
    </Container>
  )
}

export default MyCart