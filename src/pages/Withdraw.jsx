import { useSelector } from "react-redux";
import money_img from "../assets/images/money_flying.gif";
import { usePointTableQuery } from "../rtk/api/Endpoint";

const Withdraw = () => {
    const userId = useSelector((state => state?.UserInfo?._id));
    const { data, isFetching } = usePointTableQuery(userId);

    return (
        <div className='h-screen bg-black'>
            <p className="font-roboto text-xs capitalize text-center absolute top-2 left-[50%] -translate-x-[50%] text-transparent bg-gradient-to-l from-[#27C9FF] to-[#FBD130] bg-clip-text">Withdraw</p>
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-full h-fit relative">
                    <div className="relative size-28 m-auto flex justify-center items-center">
                        <div className="bg-gradient-to-r from-[#27C9FF] to-[#FBD130] blur-[88px] w-full h-full absolute z-0"></div>

                        <img src={money_img} alt="" className="w-full h-full" />
                    </div>
                    <p className="font-roboto text-2xl font-bold text-center"><span className="text-transparent bg-gradient-to-r from-[#27C9FF] to-[#FBD130] bg-clip-text ">SBP</span> ={isFetching ? <div className="">0</div> :
                        <span>{` ${data?.point}`}</span>
                    }</p>

                    <form className="mx-5 mt-5">
                        <input className="w-full outline-none bg-transparent border py-1 px-3 rounded-xl border-opacity-30 border-white" placeholder="0xCcD02b26CbdCeA0c33B76b01557Fc5a5a483EA18" />

                        <div className="bg-gradient-to-r from-[#27C9FF] to-[#FBD130] p-[1px] mx-auto mt-5 rounded-xl w-fit">
                            <button type="submit" className="bg-black rounded-xl px-5 py-2 font-roboto">Withdraw</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Withdraw;