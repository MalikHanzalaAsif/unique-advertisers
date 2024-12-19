import React, { useRef } from "react";
import mediumZoom from "medium-zoom";

function ImageZoom({ options, ...props }) {
  const zoomRef = useRef(null);

  function getZoom() {
    if (zoomRef.current === null) {
      zoomRef.current = mediumZoom(options);
    }

    return zoomRef.current;
  }

  const attachZoom = (node) => {
    const zoom = getZoom();
    zoom.update({ background: "#000000d4" });

    if (node) {
      zoom.attach(node);
    } else {
      zoom.detach();
    }

    // zoom.on("open", (event) => {
    //   console.log(`"${event.target.alt}" has been zoomed`);
    // });
  };

  return React.createElement("img", { ...props, ref: attachZoom });
}

export default ImageZoom;
