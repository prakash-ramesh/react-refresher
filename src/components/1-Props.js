import React from "react";
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/1.txt";

function Props(props) {
    return <Wrapper title="Functional Component" fileName={txt}>
        <h6>C1: Functional Component</h6>
        <span className="brief">(Stateless, Presentational or Dumb Components before React 16.8)</span>
        <p className="lead">Text received by <span className='concept'>props</span> from App Component: {props.name}</p>
    </Wrapper>
}

export default Props;