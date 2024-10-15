"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#102c57"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
{/* <a class="relative" href="#">
<span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
<span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">elevated button</span>
</a> */}