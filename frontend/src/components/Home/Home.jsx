import React from "react";
import CardsContainer from "./CardsContainer";


const Home = () => {
    return (
        <div id="info" className="mt-0 mx-0 lg:mx-24">
            <div className="w-full h-screen flex flex-col lg:flex-row items-center lg:justify-center">
                <div className="flex-1 px-4 py-8 lg:px-8 lg:py-16 text-center lg:text-left">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-800 leading-normal">
                        Informações sobre a página ICMC
                    </h1>
                    <p className="pt-4 text-xl lg:text-2xl xl:text-3xl text-gray-600">
                        Confira os prazos e procedimentos para trancar ou excluir disciplinas
                    </p>
                </div>
                <div className="flex-1 flex justify-center lg:justify-end">
                    <img src="https://i.imgur.com/6d8tOGn.jpg" className="w-full max-w-4xl lg:max-w-5xl" alt="" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-4 mt-8 lg:mt-16 px-4 lg:px-0">
                <CardsContainer />
            </div>
        </div>



    )
}


export default Home;