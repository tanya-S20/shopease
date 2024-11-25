import React from "react";
import { memo } from "react";
function Footer(){
    return (
        <div className=" w-screen  bg-slate-900 mt-8 ">
        <div className="flex mx-auto max-w-6xl justify-between text-white px-4  mt-2 pl-3 py-6" >
            <div> copyright/codeyogi2022</div>
            <div>Powered By  Codeyogi</div>
        </div>
        </div>

    );
}
export default memo(Footer);