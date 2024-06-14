// components/user/Container.js
import React from "react";
import {Paper} from "@mui/material";

const Container = ({isEditor, background, padding = 0, borderRadius, overflowY, children}) => {
  const height = isEditor ? 'calc(100vh - 50px)' : '100%';
  return (
    <Paper className="custom-scrollbar" style={{ background:'none', padding: `${padding}px`, borderRadius, height: height, overflowY:'auto', boxShadow:'none' }}>
      {children}
    </Paper>
  )
}

export default Container;