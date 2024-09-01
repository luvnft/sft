import { useSelector } from "react-redux";
import { useTaskListQuery } from "../../../rtk/api/Endpoint";
import HandleClaimStateButton from "./HandleClaimStateButton";

const TaskList = () => {
    const userId = useSelector((state => state?.UserInfo?.userId));
    const { data, isFetching } = useTaskListQuery(userId);
    console.log(data?.data[0]?.category);
    const getSocialLogo = (category) => {
        switch (category) {
            case 'Twitter':
                return "https://freepnglogo.com/images/all_img/1691832581twitter-x-icon-png.png";
            case 'Telegram':
                return "https://cdn-icons-png.flaticon.com/128/2111/2111646.png";
            case 'Discord':
                return "https://cdn-icons-png.flaticon.com/128/5968/5968756.png";
            case 'CMC':
                return "https://seeklogo.com/images/C/coinmarketcap-logo-064D167A0E-seeklogo.com.png"; 
            case 'Youtube':
                return "https://cdn-icons-png.flaticon.com/128/3670/3670147.png";
            case 'Comment':
                return "https://cdn-icons-png.flaticon.com/128/2190/2190552.png";
            case 'Like':
                return "https://cdn-icons-png.flaticon.com/128/456/456115.png";
            case 'Share':
                return "https://cdn-icons-png.flaticon.com/128/929/929468.png"; 
            case 'Partnership':
                return "https://cdn-icons-png.flaticon.com/128/1006/1006555.png";
            default:
                return "https://cdn-icons-png.flaticon.com/128/2387/2387635.png";
        }
    };



    return (
        <div>
            <div className="flex flex-col gap-5 mt-5">
                {
                    isFetching ? <div className="">
                        <div className="w-full h-16 skeleton rounded-2xl"></div>
                        <div className="w-full h-16 skeleton rounded-2xl my-3"></div>
                        <div className="w-full h-16 skeleton rounded-2xl"></div>
                        <div className="w-full h-16 skeleton rounded-2xl my-3"></div>
                        <div className="w-full h-16 skeleton rounded-2xl"></div>
                        <div className="w-full h-16 skeleton rounded-2xl my-3"></div>
                        <div className="w-full h-16 skeleton rounded-2xl"></div>

                    </div> :
                        <>
                            {
                                data?.data?.map((item, index) =>
                                    <div className="relative" key={index}>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <img src={getSocialLogo(item?.category)} alt="social logo" className="size-6" />

                                                <div className="">
                                                    <p className="font-roboto text-white text-sm capitalize">{item?.title}</p>
                                                    <p className="font-roboto text-[#D9D9D9] text-sm">+{item?.points} SP</p>
                                                </div>
                                            </div>
                                            {
                                                item?.isComplete ?
                                                    <button className="bg-[#27c9ff] px-3 py-1 w-16 h-8 rounded-full font-roboto text-black font-bold flex justify-center items-center">
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.5 1.25C4.05 1.25 1.25 4.05 1.25 7.5C1.25 10.95 4.05 13.75 7.5 13.75C10.95 13.75 13.75 10.95 13.75 7.5C13.75 4.05 10.95 1.25 7.5 1.25ZM7.5 12.5C4.74375 12.5 2.5 10.2563 2.5 7.5C2.5 4.74375 4.74375 2.5 7.5 2.5C10.2563 2.5 12.5 4.74375 12.5 7.5C12.5 10.2563 10.2563 12.5 7.5 12.5ZM9.925 5.18125L6.25 8.85625L5.075 7.68125C4.83125 7.4375 4.4375 7.4375 4.19375 7.68125C3.95 7.925 3.95 8.31875 4.19375 8.5625L5.8125 10.1813C6.05625 10.425 6.45 10.425 6.69375 10.1813L10.8125 6.0625C11.0562 5.81875 11.0562 5.425 10.8125 5.18125C10.5687 4.9375 10.1687 4.9375 9.925 5.18125Z" fill="black" />
                                                        </svg>
                                                    </button> :
                                                    <HandleClaimStateButton taskId={item?._id} link={item?.link} />
                                            }
                                        </div>

                                        <div className="w-[87%] h-[1px] bg-[#99999966] absolute -bottom-2 right-0"></div>
                                    </div>
                                )}


                            {/* <div className="relative">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <img src="https://freepnglogo.com/images/all_img/1691832581twitter-x-icon-png.png" alt="social logo" className="size-6" />

                                        <div className="">
                                            <p className="font-roboto text-white text-sm">Follow SFT Protocol on X</p>
                                            <p className="font-roboto text-[#D9D9D9] text-sm">+10 SP</p>
                                        </div>
                                    </div>

                                    <button className="bg-[#282828] px-3 py-1 rounded-full font-roboto text-white font-bold">Start</button>
                                </div>

                                <div className="w-[87%] h-[1px] bg-[#99999966] absolute -bottom-2 right-0"></div>
                            </div>

                            <div className="relative">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <img src="https://freepnglogo.com/images/all_img/1691832581twitter-x-icon-png.png" alt="social logo" className="size-6" />

                                        <div className="">
                                            <p className="font-roboto text-white text-sm">Follow SFT Protocol on X</p>
                                            <p className="font-roboto text-[#D9D9D9] text-sm">+10 SP</p>
                                        </div>
                                    </div>

                                    <button className="bg-yellow-500 px-3 py-1 rounded-full font-roboto text-black font-bold">Claim</button>
                                </div>

                                <div className="w-[87%] h-[1px] bg-[#99999966] absolute -bottom-2 right-0"></div>
                            </div> */}
                        </>
                }
            </div>
        </div>
    );
};

export default TaskList;