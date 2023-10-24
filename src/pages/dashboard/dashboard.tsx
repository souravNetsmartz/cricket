import { Button } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../utils/reduxHooks";
import { increment } from "../../feature/counter/counterSlice";
import MyAppBar from "../../component/appBar";

function Dashboard(): React.ReactElement {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.counter.value);
  return (
    <div>
      <MyAppBar title="Cricket Board" />
      <h1>{data}</h1>
      <Button onClick={() => dispatch(increment())}>Inc</Button>
    </div>
  );
}

export default Dashboard;
