import { RaceBy } from "@uiball/loaders";
import React from "react";

function Loading() {
  return (
    <div className="bg-gray-100 min-h-screen w-full flex justify-center items-center">
      <RaceBy size={100} lineWeight={5} speed={1.4} color="black" />
    </div>
  );
}

export default Loading;
