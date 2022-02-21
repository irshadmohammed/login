import React from 'react';
import './Home.css';
import ImageContainer from './ImageContainer';
import Registration from './Registration';
import { connect } from 'react-redux'

function Home(props) {
  return (
    <div className='home__wrapper'>
      {props.loginFlag === true ? (
        <>
          <h2>{props.name}</h2>
          <h3>Registered Successfully!!!</h3>
        </>
      ) : (
        <div className="row">
          <div className="col-md-6 col-left-sec h-100 nopadding">
            <ImageContainer />
          </div>
          <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0 nopadding">
            <Registration />
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  loginFlag: state.currentValue,
  name: state.name
})

export default connect(mapStateToProps, null)(Home)