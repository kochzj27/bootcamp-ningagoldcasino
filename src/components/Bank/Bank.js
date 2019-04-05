import React from 'react';
import { connect } from 'react-redux';
import { updateBank } from '../../redux';
import './Bank.css';

const Bank = (props) => {
  return (
    <div className='bank-cont'>
      <h5 >Bank</h5>
      <hr />
      <h3>Gold Count: {props.gold}</h3>
      <hr />
      <button className='btn btn-dark' onClick={() => props.updateBank('Bankruptcy')}>Declare Bankruptcy</button>
    </div >
  )
}

const mapStateToProps = (state) => ({
  gold: state.gold,
})

const mapDispatchToProps = (dispatch) => ({
  updateBank: (value) => dispatch(updateBank(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bank);

// export default Bank;