import React from 'react';
import { connect } from 'react-redux';
import { updateBank } from '../../redux';

import './FarmTile.css';

const FarmTile = (props) => {
  return (
    <div className='farm-tile'>
      <h2>{props.type}</h2>
      <p>{props.text}</p>
      <button className={`btn btn-${props.btntype}`} onClick={() => props.updateBank(props.type)}>{props.type}!</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  updateBank: (game) => dispatch(updateBank(game)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FarmTile);

// export default FarmTile;