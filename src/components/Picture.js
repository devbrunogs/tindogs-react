import React from "react";

function Picture({ src, isLoading }) {
  return (
    <div
      className="flex self-center justify-center transition ease-in-out delay-150 bg-center bg-no-repeat bg-contain max-h-lg h-96 w-96 drop-shadow-md"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className={`${isLoading ? 'opacity-100' : 'opacity-0'} flex justify-center self-center flex-col transition ease-in-out delay-150`}>
        <span class="animate-ping self-center inline-flex h-12 w-12 rounded-full bg-sky-400 opacity-75 mb-10"></span>
        <p>Searching for good doggos</p>
      </div>
    </div>
  )
}

export default Picture;