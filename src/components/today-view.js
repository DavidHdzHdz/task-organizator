import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
const myButton = {
    width: '100%',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

}

const TodayView = () => (
  <div style={myButton}>
    <RaisedButton label="Mi botón" />
  </div>
);

export default TodayView;
