import React from "react";
import Portfolio from "../components/Portfolio";
import userData from "../constants/data";

export default function about() {
  return <Portfolio projects={userData.projects} />;
}
