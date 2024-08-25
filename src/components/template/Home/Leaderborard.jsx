
const Leaderborard = () => {
    return (
        <div>
            <div className="w-full bg-[#0000004D] rounded-2xl mt-5 relative overflow-hidden">
                <div className="bg-[#27C9FF59] rounded-[340px] blur-[130px] -left-[150px] -bottom-[30px] rotate-45 w-[155px] h-[340px] absolute"></div>
                <div className="bg-[#FBD13066] rounded-[340px] -right-[150px] -top-[130px] blur-[130px]  rotate-[-16] w-[155px] h-[340px] absolute"></div>

                <p className="font-roboto text-xs capitalize text-center absolute top-2 left-[50%] -translate-x-[50%] text-transparent bg-gradient-to-l from-[#27C9FF] to-[#FBD130] bg-clip-text">Leaderboard</p>


                <div className="flex flex-col gap-3 p-5 mt-3">
                    <div className="bg-[#FFFFFF1A] backdrop-blur-sm h-16 mt-0 rounded-2xl flex items-center gap-3 px-3 overflow-hidden">
                        <div className="size-12 p-[2px] bg-gradient-to-r from-[#27C9FF] to-[#FBD130] rounded-2xl relative">
                            <div className="bg-[#27C9FF] w-full h-full blur-md z-0 rounded-2xl absolute"></div>
                            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwlTyKJZQTzAUHm3ClY49pHSKyWFu1a6l7A&s`} alt="" className="rounded-2xl z-10 relative w-full h-full" />
                        </div>
                        <p className="font-roboto text-xs font-bold">• 1</p>
                        <div className="">
                            <p className="font-roboto text-sm text-white">J. Joseph Nahid</p>
                            <p className="font-roboto text-xs text-[#999999]">999999 <strong>SBT</strong></p>
                        </div>
                    </div>

                    <div className="bg-[#FFFFFF1A] backdrop-blur-sm h-16 mt-0 rounded-2xl flex items-center gap-3 px-3 overflow-hidden">
                        <div className="size-12 p-[2px] bg-gradient-to-r from-[#27C9FF] to-[#FBD130] rounded-2xl relative">
                            {/* <div className="bg-[#27C9FF] w-full h-full blur-md z-0 rounded-2xl absolute"></div> */}
                            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwlTyKJZQTzAUHm3ClY49pHSKyWFu1a6l7A&s`} alt="" className="rounded-2xl z-10 relative w-full h-full" />
                        </div>
                        <p className="font-roboto text-xs font-bold">• 1</p>
                        <div className="">
                            <p className="font-roboto text-sm text-white">J. Joseph Nahid</p>
                            <p className="font-roboto text-xs text-[#999999]">999999 <strong>SBT</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderborard;