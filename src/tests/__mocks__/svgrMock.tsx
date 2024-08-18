import React, { forwardRef } from "react";

const SvgrMock = forwardRef<HTMLSpanElement>((props, ref) => (
  <span ref={ref} {...props} />
));
SvgrMock.displayName = "SvgrMock";
export default SvgrMock;
