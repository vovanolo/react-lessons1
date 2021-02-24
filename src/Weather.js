import React from "react";

export default function Weather({ temperature, vologist }) {
  // let result = "";
  // if (temperature < 9) {
  //   result = "холодно";
  // } else {
  //   result = "тепло";
  // }

  return (
    <div>
      <h2>{temperature}</h2>
      {/* {temperature < 9 && <p>Холодно</p>}
      {temperature >= 9 && <p>Тепло</p>} */}
      {/* {temperature < 9 ? <p>Холодно</p> : <p>Тепло</p>} */}
      {/* <p>{result}</p> */}
      {temperature < 9 ? (
        <>
          <p>Холодно</p>
          <span>будьте обережні</span>
        </>
      ) : (
        <>
          <p>Тепло</p>
          <span>відпочивайте</span>
        </>
      )}
      <p>{vologist}</p>
    </div>
  );
}
