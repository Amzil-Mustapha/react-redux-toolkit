import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

function ComApp() {
  const GLOBAL_STATE = useSelector((state) => state);
  const dispatch = useDispatch();
  const { INC, DEC } = counterActions;

  return (
    <>
      <h1>{GLOBAL_STATE.count}</h1>
      <button onClick={() => dispatch(INC(10))}>INC</button> {/** 10 is a action.payload  */}
      <button onClick={() => dispatch(DEC(3))}>DEC</button>
    </>
  );
}
export default ComApp;
