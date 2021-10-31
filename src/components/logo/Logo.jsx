import React from "react";

 function Logo({ type = "default" }) {
  return type == "muted" ? (
    <img src="/images/logo-muted.svg" />
  ) : (
    <img src="/images/logo.svg" />
  );
};

export default Logo;