import { useLeaderboardQuery } from "../../rtk/api/Endpoint";

const UserManagement = () => {
    const { data, isFetching } = useLeaderboardQuery(undefined);
    return (
        <div className='min-h-screen'>
            <div className="overflow-x-auto ">
                {
                    isFetching === true ?
                        <div className=" flex justify-center items-center min-h-screen">
                            <span className="loading loading-dots loading-lg"></span>
                        </div> :
                        <table className="table text-center ">
                            <thead className='text-2xl'>
                                <tr className="text-white">
                                    <th className="">Username</th>
                                    <th className="border border-[#27c9ff34] border-t-0">SBP Balance</th>
                                    <th className="">Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.data?.map((item, key) => <tr key={key} className="">
                                        <td className="border border-[#27c9ff34] border-l-0">@{item?.userId.username}</td>
                                        <td className="border border-[#27c9ff34]">{item?.point}</td>
                                        <td className="border border-[#27c9ff34] border-r-0">{key+1}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                }
            </div>
        </div>
    );
};

export default UserManagement;