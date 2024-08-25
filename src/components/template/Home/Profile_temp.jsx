import profile_img from "../../../assets/images/profile_img.png";

const Profile_temp = () => {
    return (
        <div>
            <div className="bg-[#00000033] rounded-2xl relative overflow-hidden p-5">
                <div className="bg-[#27C9FF59] rounded-[340px] blur-[130px] -left-[150px] -top-[30px] rotate-45 w-[155px] h-[340px] absolute"></div>
                <div className="bg-[#FBD13066] rounded-[340px] -right-[150px] -bottom-[130px] blur-[130px]  rotate-[-16] w-[155px] h-[340px] absolute"></div>

                <p className="font-roboto text-xs capitalize text-center absolute top-2 left-[50%] -translate-x-[50%] text-transparent bg-gradient-to-r from-[#27C9FF] to-[#FBD130] bg-clip-text">profile</p>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-[2px] bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] rounded-full">
                            <img src={profile_img} alt="" className="rounded-full size-[51px]" />
                        </div>

                        <div className="">
                            <p className="text-xl font-roboto text-white ">Name</p>
                            <p className="text-xs font-roboto text-[#999999]">@username</p>
                        </div>
                    </div>

                    <div className="w-fit h-fit bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] bg-transparent bg-clip-border p-[2px] rounded-md">
                        <p className="font-roboto rounded-md text-white px-5 py-[2px] bg-black text-opacity-70">Edit</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-5">
                    <div className="flex justify-between items-center gap-1 h-10">
                        <input type="text" className="flex-[14] bg-[#FFFFFF33] h-full px-2 py-1 font-roboto rounded-l-lg outline-none" placeholder="@twitter" />
                        <div className="flex-[2] bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] bg-transparent bg-clip-border p-[2px] rounded-r-lg h-full">
                            <div className="bg-black w-full h-full rounded-r-lg flex justify-center items-center">
                                <p className={`bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] text-transparent bg-clip-text`}>{`✓`}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-1 h-10">
                        <input type="text" className="flex-[14] bg-[#FFFFFF33] h-full px-2 py-1 font-roboto rounded-l-lg outline-none" placeholder="@discord" />
                        <div className="flex-[2] bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] bg-transparent bg-clip-border p-[2px] rounded-r-lg h-full">
                            <div className="bg-black w-full h-full rounded-r-lg flex justify-center items-center">
                                <p className={`bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] text-gray-500 bg-clip-text`}>{`✓`}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-1 h-10">
                        <input type="text" className="flex-[14] bg-[#FFFFFF33] h-full px-2 py-1 font-roboto rounded-l-lg outline-none" placeholder="@cmc" />
                        <div className="flex-[2] bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] bg-transparent bg-clip-border p-[2px] rounded-r-lg h-full">
                            <div className="bg-black w-full h-full rounded-r-lg flex justify-center items-center">
                                <p className={`bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] text-gray-500 bg-clip-text`}>{`✓`}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-1 h-10">
                        <input type="text" className="flex-[14] bg-[#FFFFFF33] h-full px-2 py-1 font-roboto rounded-l-lg outline-none" placeholder="@linkedin" />
                        <div className="flex-[2] bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] bg-transparent bg-clip-border p-[2px] rounded-r-lg h-full">
                            <div className="bg-black w-full h-full rounded-r-lg flex justify-center items-center">
                                <p className={`bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] text-gray-500 bg-clip-text`}>{`✓`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile_temp;