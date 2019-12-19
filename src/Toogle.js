import React, { Component } from "react";
import { connect } from "react-redux";
import toogleMessage from "./actions";
import { bindActionCreators } from "redux";

const Toogle = ({ messageVisibility, toogleMessage }) => (
  <div>
    {messageVisibility && <p>You will see this if toggled</p>}
    <button onClick={() => toogleMessage()}>Toogle Me</button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toogleMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toogle);
