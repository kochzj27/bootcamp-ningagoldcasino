import React from 'react';
import FarmTile from '../FarmTile/FarmTile';
import './Farm.css';

const Farm = (props) => {
  return (
    <div className='farm-cont'>
      <h5 >Farm</h5>
      <hr />
      <div className='farm-tile-cont'>
        <FarmTile type='Farm' text='Earns 2 - 5 Gold' btntype='primary' />
        <FarmTile type='Cave' text='Earns 5 - 10 Gold' btntype='warning' />
        <FarmTile type='Casino' text='Earn/Lose up to 100 Gold' btntype='danger' />
        <FarmTile type='House' text='Earns 7 - 15 Gold' btntype='success' />
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({
// })

// const mapDispatchToProps = (dispatch) => ({
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Farm);

export default Farm;