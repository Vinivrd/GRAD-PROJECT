import React from "react";

const InputFile = ({ id, texto, accept }) => {
    return (
        <div className="mb-4">
            <div class="max-w-2xl mx-auto">

                <label class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray-800"
                for={id}> {texto}</label>
                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none dark:bg-gray-50 dark:border-gray-500 dark:placeholder-gray-400"
                 id={id} 
                 type="file"
                 accept={accept}
                 />
            </div>
        </div>
    );
};

export default InputFile;