import React, { Component } from "react";
import { connect } from "react-redux";

const Toogle = ({ messageVisibility, dispatch }) => (
  <div>
    {messageVisibility && <p>You will see this if toggled</p>}
    <button onClick={() => dispatch({ type: "TOOGLE_MESSAGE" })}>
      Toogle Me
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

export default connect(mapStateToProps)(Toogle);
