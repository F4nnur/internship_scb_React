import React from "react";

interface Props {
  time: number;
}

const TimerForm: React.FC<Props> = ({ time }: Props) => {
  return (
    <React.Fragment>
      {" "}
      <span>{("0" + Math.floor((time / 360) % 60)).slice(-2)}</span>
      <span>:</span>
      <span>{("0" + Math.floor((time / 60) % 60)).slice(-2)}</span>
      <span>:</span>
      <span>{("0" + Math.floor((time / 1) % 60)).slice(-2)}</span>
    </React.Fragment>
  );
};

export default TimerForm;
