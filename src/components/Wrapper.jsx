import React from "react";

const Wrapper = ({
  children,
  style: customStyles,
  className: customClasses,
}) => {
  return (
    <main
      className={"container" + " " + customClasses}
      style={{ ...styles, ...customStyles }}
    >
      {children}
    </main>
  );
};

export default Wrapper;

const styles = {};
