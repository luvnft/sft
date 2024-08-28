import { useState } from "react";

const HandleClaimStateButton = () => {
    const [isClaim, setClaim] = useState(false);
    return (
        <div>
            {
                isClaim ?
                    <button className="bg-yellow-500 px-3 py-1 w-16 h-8 rounded-full font-roboto text-black font-bold" onClick={() => setClaim(true)}>Claim</button>
                    :
                    <button className="bg-[#282828] px-3 py-1 w-16 h-8 rounded-full font-roboto text-white font-bold" onClick={() => setClaim(true)}>Start</button>

            }
        </div>
    );
};

export default HandleClaimStateButton;