import { memo } from "react";

export default memo(function Button(props) {
  console.log("Rendering Button");

  // This logic will made Button component slow for 1 sec
  const startTime = new Date();
  while (new Date() - startTime < 1000) {}

  return <button {...props} />;
});
