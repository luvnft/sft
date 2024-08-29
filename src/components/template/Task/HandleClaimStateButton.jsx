import { useState } from "react";
import { Link } from "react-router-dom";
import { useMarkAsCompleteMutation } from "../../../rtk/api/Endpoint";
import { useSelector } from "react-redux";

const HandleClaimStateButton = ({ link, taskId }) => {
    const [isClaim, setClaim] = useState(false);
    const [triggerClaim, { data, isLoading }] = useMarkAsCompleteMutation(undefined);
    const userId = useSelector((state => state?.UserInfo?.userId));

    const HandleClaim = async () => {
        const DataObject = {
            taskId: taskId,
            userId
        }

        await triggerClaim(DataObject);
    }

    return (
        <div>
            {
                isClaim ?
                    <button className={`${isLoading ? 'bg-[#27c9ff] flex justify-center items-center' : 'bg-yellow-500'} px-3 py-1 w-16 h-8 rounded-full font-roboto text-black font-bold`} onClick={HandleClaim}>
                        {
                            isLoading ?
                                <span className="loading loading-dots loading-xs"></span> : 'Claim'
                        }
                    </button>
                    :
                    <div className=" w-16 h-8 bg-[#282828] rounded-full flex justify-center items-center">
                        <Link to={link} target="_blank" className="px-3 py-1 font-roboto text-white font-bold" onClick={() => setClaim(true)}>Start</Link>
                    </div>

            }
        </div>
    );
};

export default HandleClaimStateButton;