import React from "react";

export default function Logo({ type = "default" }) {
  return type == "muted" ? (
    <img src="/images/logo-muted.svg" />
  ) : (
    <img src="/images/logo.svg" />
  );
};
