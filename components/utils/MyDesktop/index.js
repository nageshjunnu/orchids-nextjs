import React, { useEffect, useLayoutEffect, useState } from "react";

export const MyDesktop = (props) => {
  const [windowSize, setwindowSize] = useState(0);

  useEffect(() => {
    function updateSize() {
      setwindowSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <React.Fragment>
      {windowSize >= 1024 ? props.children : null}
    </React.Fragment>
  );
};

export default MyDesktop;
