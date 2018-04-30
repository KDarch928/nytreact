import React from "react";

export const Col = ({ size, children }) => (
  <div className={size.split(" ").map(size => "col-" + size).join(" ")} style={{marginTop:10,marginBottom:10}}>
    {children}
  </div>
);
