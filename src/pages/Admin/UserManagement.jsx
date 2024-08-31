import { useLeaderboardQuery } from "../../rtk/api/Endpoint";

const UserManagement = () => {
    const { data, isFetching } = useLeaderboardQuery(undefined);
    return (
        <div className='k min-h-screen'>
            <div className="overflow-x-auto bg-[#ffffff2c] m-1 rounded-lg">
                {
                    isFetching === true ?
                        <div className=" flex justify-center items-center min-h-screen">
                            <span className="loading loading-dots loading-lg"></span>
                        </div> :
                        <table className="table table-zebra text-center">
                            <thead className='text-2xl'>
                                <tr>
                                    <th>Username</th>
                                    <th>SBP Balance</th>
                                    <th>Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.data?.map((item, key) => <tr key={key}>
                                        <td>@{item?.userId.username}</td>
                                        <td>{item?.point}</td>
                                        <td>{key+1}</td>
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