import React from "react";

function Layout(props) {
  const { children } = props;
  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-10 bg-blue-900 flex items-center justify-between p-2">
        <h1 className="font-bold text-white">My Image App</h1>
        <button className="bg-green-600 rounded-sm px-2 py-1 text-[12px] font-bold text-white">
          Click Me!
        </button>
      </div>
      {children}
      <button
        className="absolute left-1 bottom-1 w-auto bg-green-600 px-2 py-1 text-[12px] font-bold text-white text-center rounded-full"
        onClick={() => {
          alert("Chinga Tu Madre!");
        }}
      >
        Click Me!
      </button>
    </div>
  );
}

export default Layout;
