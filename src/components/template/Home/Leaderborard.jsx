import { useLeaderboardQuery } from "../../../rtk/api/Endpoint";

const Leaderborard = () => {
    const { data, isFetching } = useLeaderboardQuery(undefined);

    return (
        <div>
            <div className="w-full bg-[#0000004D] rounded-2xl mt-5 relative overflow-hidden">
                <div className="bg-[#27C9FF59] rounded-[340px] blur-[130px] -left-[150px] -bottom-[30px] rotate-45 w-[155px] h-[340px] absolute"></div>
                <div className="bg-[#FBD13066] rounded-[340px] -right-[150px] -top-[130px] blur-[130px]  rotate-[-16] w-[155px] h-[340px] absolute"></div>

                <p className="font-roboto text-xs capitalize text-center absolute top-2 left-[50%] -translate-x-[50%] text-transparent bg-gradient-to-l from-[#27C9FF] to-[#FBD130] bg-clip-text">Leaderboard</p>

                {
                    isFetching ? <div className="p-5 mt-3 flex flex-col gap-3">
                        <div className={`bg-[#FFFFFF1A] backdrop-blur-sm h-16 mt-0 rounded-2xl flex items-center gap-3 px-3 overflow-hidden `}>
                            <div className="size-11 p-[2px] skeleton rounded-2xl relative">
                                {/* <img src={item?.userId?.profilePicture ? item?.userId?.profilePicture : "https://img.freepik.com/free-vector/modern-question-mark-template-idea-message-vector_1017-47932.jpg"} alt="" className="rounded-2xl z-10 relative w-full h-full" /> */}
                            </div>
                            <p className="font-roboto text-xs font-bold">• {1}</p>
                            <div className="">
                                <p className="font-roboto text-sm text-white skeleton w-20 h-5"></p>
                                <p className="font-roboto text-xs text-[#999999] skeleton w-16 h-4 mt-2"></p>
                            </div>
                        </div>

                        <div className={`bg-[#FFFFFF1A] backdrop-blur-sm h-16 mt-0 rounded-2xl flex items-center gap-3 px-3 overflow-hidden `}>
                            <div className="size-11 p-[2px] skeleton rounded-2xl relative">
                                {/* <img src={item?.userId?.profilePicture ? item?.userId?.profilePicture : "https://img.freepik.com/free-vector/modern-question-mark-template-idea-message-vector_1017-47932.jpg"} alt="" className="rounded-2xl z-10 relative w-full h-full" /> */}
                            </div>
                            <p className="font-roboto text-xs font-bold">• {2}</p>
                            <div className="">
                                <p className="font-roboto text-sm text-white skeleton w-20 h-5"></p>
                                <p className="font-roboto text-xs text-[#999999] skeleton w-16 h-4 mt-2"></p>
                            </div>
                        </div>

                        <div className={`bg-[#FFFFFF1A] backdrop-blur-sm h-16 mt-0 rounded-2xl flex items-center gap-3 px-3 overflow-hidden `}>
                            <div className="size-11 p-[2px] skeleton rounded-2xl relative">
                                {/* <img src={item?.userId?.profilePicture ? item?.userId?.profilePicture : "https://img.freepik.com/free-vector/modern-question-mark-template-idea-message-vector_1017-47932.jpg"} alt="" className="rounded-2xl z-10 relative w-full h-full" /> */}
                            </div>
                            <p className="font-roboto text-xs font-bold">• {3}</p>
                            <div className="">
                                <p className="font-roboto text-sm text-white skeleton w-20 h-5"></p>
                                <p className="font-roboto text-xs text-[#999999] skeleton w-16 h-4 mt-2"></p>
                            </div>
                        </div>
                        <div className={`bg-[#FFFFFF1A] backdrop-blur-sm h-16 mt-0 rounded-2xl flex items-center gap-3 px-3 overflow-hidden `}>
                            <div className="size-11 p-[2px] skeleton rounded-2xl relative">
                                {/* <img src={item?.userId?.profilePicture ? item?.userId?.profilePicture : "https://img.freepik.com/free-vector/modern-question-mark-template-idea-message-vector_1017-47932.jpg"} alt="" className="rounded-2xl z-10 relative w-full h-full" /> */}
                            </div>
                            <p className="font-roboto text-xs font-bold">• {4}</p>
                            <div className="">
                                <p className="font-roboto text-sm text-white skeleton w-20 h-5"></p>
                                <p className="font-roboto text-xs text-[#999999] skeleton w-16 h-4 mt-2"></p>
                            </div>
                        </div>
                    </div> :
                        <div className="flex flex-col gap-3 p-5 mt-3">
                            <div className={`bg-[#FFFFFF1A] backdrop-blur-sm h-16 mt-0 rounded-2xl flex items-center gap-3 px-3 overflow-hidden `}>
                                <div className="size-12 p-[2px] bg-gradient-to-r from-[#27C9FF] to-[#FBD130] rounded-2xl relative">
                                    <div className="bg-[#27C9FF] w-full h-full blur-md z-0 rounded-2xl absolute"></div>
                                    <img src={data?.data[1]?.userId?.profilePicture} alt="" className="rounded-2xl z-10 relative w-full h-full" />
                                </div>
                                <p className="font-roboto text-xs font-bold">• 1</p>
                                <div className="">
                                    <p className="font-roboto text-sm text-white">{data?.data[1]?.userId?.fullName}</p>
                                    <p className="font-roboto text-xs text-[#999999]">{data?.data[1]?.point} <strong>SBT</strong></p>
                                </div>
                            </div>

                            {
                                data?.data?.slice(2, 50)?.map((item, index) =>
                                    <div key={index} className={`bg-[#FFFFFF1A] backdrop-blur-sm h-16 mt-0 rounded-2xl flex items-center gap-3 px-3 overflow-hidden `}>
                                        <div className="size-11 p-[2px] bg-gradient-to-r from-[#27C9FF] to-[#FBD130] rounded-2xl relative">
                                            <img src={item?.userId?.profilePicture ? item?.userId?.profilePicture : "https://img.freepik.com/free-vector/modern-question-mark-template-idea-message-vector_1017-47932.jpg"} alt="" className="rounded-2xl z-10 relative w-full h-full" />
                                        </div>
                                        <p className="font-roboto text-xs font-bold">• {index + 2}</p>
                                        <div className="">
                                            <p className="font-roboto text-sm text-white">{item?.userId?.fullName}</p>
                                            <p className="font-roboto text-xs text-[#999999]">{item?.point} <strong>SBT</strong></p>
                                        </div>
                                    </div>
                                )}
                        </div>
                }
            </div>
        </div>
    );
};

export default Leaderborard;