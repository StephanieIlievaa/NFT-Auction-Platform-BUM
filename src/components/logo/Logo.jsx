import React from "react";

 const Logo = ({ type = "default" }) => {
  return type == "muted" ? (
    <img src="/images/logo-muted.svg" />
  ) : (
    <img src="/images/logo.svg" />
  );
};

export default Logo;