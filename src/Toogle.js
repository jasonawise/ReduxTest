import React, { Component } from "react";
import { connect } from "react-redux";

const Toogle = ({ messageVisibility }) => (
  <div>
    {messageVisibility && <p>You will see this if toggled</p>}
    <button>Toogle Me</button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

export default connect(mapStateToProps)(Toogle);
