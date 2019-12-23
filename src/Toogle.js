import React from "react";
import { connect } from "react-redux";
import { toogleMessage, getMovies } from "./actions";
import { bindActionCreators } from "redux";

const Toogle = ({ messageVisibility, toogleMessage, getMovies }) => (
  <div>
    {messageVisibility && <p>You will see this if toggled</p>}
    <button onClick={() => toogleMessage()}>Toogle Me</button>
    <button onClick={() => getMovies()}>Load Movies</button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toogleMessage, getMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toogle);
