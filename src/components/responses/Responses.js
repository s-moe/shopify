import React from "react";
import "./responses.scss";
import Backdrop from "@mui/material/Backdrop";
import { CircularProgress } from "@material-ui/core";

export default function Responses({ responseList, loading }) {
  const outerDivClassName = "outerDiv";
  const innerDivClassName = "outputList";
  const promptClassName = "prompt";
  const responseClassName = "response";
  const backdropColor = "#fff";
  const circularProgressColor = "inherit";

  return (
    <div className={outerDivClassName}>
      {loading ? (
        <Backdrop
          sx={{
            color: { backdropColor },
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open
        >
          <CircularProgress color={circularProgressColor} />
        </Backdrop>
      ) : (
        <>
          {responseList.map((output, i) => (
            <div key={i} id={i} className={innerDivClassName}>
              <h4 className={promptClassName}>{output.prompt}</h4>
              {output.ideas.map((idea, i) => (
                <div key={i} id={i}>
                  <div className={responseClassName}>{idea}</div>
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
