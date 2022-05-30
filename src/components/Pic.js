const Pic = () => {
    return ( 
        <div className="bg-black w-screen h-screen flex flex-col justify-start items-center px-6 py-10">
            {/* <p  className="my-6 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-600 to-sky-400 cursive">
                The Dancing
            </p>
            <p className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 px-10 mb-4 text-center leading-tight">
                People dance independently but in the company of others
            </p>
            <p className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 px-12 text-center leading-tight">
                It's time for
            </p>
            <p className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600 px-12 mb-4 text-center leading-tight self -rotate-6">
            self-expression
            </p>
            <p className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 px-12 mb-8 text-center leading-tight">
                Dance how you like, at your own pace
            </p> */}


            {/* <p className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 relative">
            Non-judemental
            </p>
            <p className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                Inclusive
            </p>
            <p className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 mb-6 relative">
                Friendly
            </p> */}

            <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
            <div className="snap-start w-screen h-screen bg-red-500"></div>
            <div className="snap-start w-screen h-screen bg-green-500"></div>
            <div className="snap-start w-screen h-screen bg-blue-500"></div>
            </div>



        </div>
     );
}
 
export default Pic;