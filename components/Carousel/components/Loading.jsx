import React from "react";
import { RaceBy } from "@uiball/loaders";

function Loading() {
  return (
    <div className="flex justify-center items-center h-full">
      <RaceBy size={100} lineWeight={5} speed={1.4} color="black" />
    </div>
  );
}

export default Loading;
