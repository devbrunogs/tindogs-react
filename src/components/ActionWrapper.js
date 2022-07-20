import React from "react";
import { HeartIcon, RefreshIcon, XIcon } from "@heroicons/react/solid";

import Button from "./Button";


function ActionWrapper({ likeAction, dislikeAction, refreshAction }) {
  return (
    <div className="flex justify-center gap-3">
      <Button onClick={likeAction}>
        <HeartIcon className="w-16 h-16 text-green-500" />
      </Button>
      <Button onClick={refreshAction}>
        <RefreshIcon className="w-10 h-10 text-blue-500" />
      </Button>
      <Button onClick={dislikeAction}>
        <XIcon className="w-16 h-16 text-red-500" />
      </Button>
    </div>
  )
}

export default ActionWrapper;