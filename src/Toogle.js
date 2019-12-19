import React, { Component } from "react";
import { connect } from "react-redux";
import toogleMessage from "./actions";
const Toogle = ({ messageVisibility, dispatch }) => (
  <div>
    {messageVisibility && <p>You will see this if toggled</p>}
    <button onClick={() => dispatch(toogleMessage())}>Toogle Me</button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

export default connect(mapStateToProps)(Toogle);
