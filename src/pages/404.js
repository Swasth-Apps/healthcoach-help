import React from 'react'
import Layout from '../components/Layout'
import UnderConstruction from '../img/assets/under_construction.png'


const NotFoundPage = () => (
  <Layout>
    <section className='coming-soon-section'>
      <div>
        <h2 className='bottom-space base-text'>We are working on the help page you are looking for. <br />
          Check back soon. Sorry for the inconvenience <br/> </h2>
        <img src={UnderConstruction} className='custom-image'/>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage
