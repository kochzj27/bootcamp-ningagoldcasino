import React from 'react';
import { connect } from 'react-redux';
import './Log.css';


const Log = (props) => {


  let logDisplay;
  if (props.logs && props.logs.length > 0) {
    let tempLogs = props.logs.sort((a, b) => {
      return b.id - a.id;
    });

    logDisplay = tempLogs.map((item, idx) => {
      let res = item.change > 0 ? "won" : 'lost';
      if (item.change === 0) {
        res = 'bankrupt';
      }
      let change = item.change.toString();
      if (res === 'lost') {
        change = change.replace('-', '');
      }
      return (
        <div className='log-item' key={idx}>
          {res !== 'bankrupt' ? <div>
            <p><span className='bold'>{item.user}</span> just {res} <span className={`bold ${res}`}>{change}</span> gold in {item.game}!</p>
            <hr />
          </div> :
            <div>
              <p><span className='bold lost'>{item.user} just lost it all in {item.game}!</span></p>
              <hr />
            </div>}
        </div>
      )
    })
  }


  return (
    <div className='log-cont'>
      <h5>Logs</h5>
      <hr />
      <div className='log-tile-cont'>
        {logDisplay}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  logs: state.logs,
  gold: state.gold,
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  // updateBank: (game, value, person) => dispatch(updateBank(game, value, person)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Log);
// export default Log;