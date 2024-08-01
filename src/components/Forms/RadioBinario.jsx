import React from "react";

const RadioBinario = ({textoPrincipal,name,id,idError,label,label2}) => {
    return(
      <div>
        <p class="text-gray-500">{textoPrincipal}</p>
        <div class="flex mb-4 space-x-1 pt-5 pb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 border-gray-200">
              <div class="block">
                <input
                  type="radio"
                  name={name}
                  value="1"
                  id = {id}
                  class=" mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                />
                <label for={name} id={idError} className="text-gray-800 text-2sm font-normal">{label}</label>
              </div>

              <div class="block">
                <input
                  type="radio"
                  name={name}
                  value="2"
                  id = {id}
                  class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                />
                <label for={name} id={idError} className="text-gray-800 text-2sm font-normal">{label2}</label>
              </div>
            </div>
      </div>
    );
};

export default RadioBinario;