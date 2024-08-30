import { useForm } from "react-hook-form";
import profile_img from "../../../assets/images/profile_img.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFindAccountQuery, useUpdateAccountMutation } from "../../../rtk/api/Endpoint";
import { setMongooseId } from "../../../rtk/slice/UserInfoSlice";
import WebApp from "@twa-dev/sdk";

const Profile_temp = () => {
    const { register, handleSubmit } = useForm();
    const [isEdit, setEdit] = useState(false);
    const [isLoadingFinally, setLoadingFinally] = useState(false);
    const userId = useSelector((state => state.UserInfo?.userId));
    const [profileImage, setProfileImage] = useState(undefined);
    const disPatch = useDispatch();
    const [TriggerUpdateProfile] = useUpdateAccountMutation(undefined);
    const { data, isFetching } = useFindAccountQuery(userId);
    disPatch(setMongooseId({ _id: data?._id }))

    const User = WebApp.initDataUnsafe.start_param;


    const HandleProfileSubmission = async (e) => {
        try {
            setLoadingFinally(true);
            const ImageFormData = new FormData();
            ImageFormData.append('image', e.img[0]);

            const imgLink = await fetch('https://api.imgbb.com/1/upload?key=8c774531db468728c2d324fd5ba6991d', {
                body: ImageFormData,
                method: "POST"
            }).then(res => res.json());

            const userInfoObject = {
                userId,
                ...(imgLink && { profilePicture: imgLink?.data?.display_url } || ""),
                fullName: e.name,
            };
            await TriggerUpdateProfile(userInfoObject);
        } finally {
            setLoadingFinally(false);
            setEdit(false);
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    return (
        <div>
            <div className="rounded-2xl relative overflow-hidden p-5">
                
                <div className="bg-gradient-to-b from-[#0000004D] to-transparent w-full h-full absolute top-0 left-0 z-0"></div>

                <p className="font-roboto text-xs capitalize text-center absolute top-2 left-[50%] -translate-x-[50%] text-transparent bg-gradient-to-r from-[#27C9FF] to-[#FBD130] bg-clip-text">profile</p>
                {
                    isFetching ? <div className="flex flex-col justify-center gap-5 items-center py-5 w-full relative  z-10">
                        <div className="flex items-center gap-3">
                            <div className="p-[2px] skeleton rounded-full relative  size-[51px] flex justify-center items-center overflow-hidden">
                              
                            </div>

                            <div className="">
                                <p className="text-xl font-roboto text-white skeleton w-24 h-6"></p>
                                <p className="text-xs font-roboto text-[#999999] skeleton w-24 h-4 mt-2"></p>
                            </div>
                        </div>

                        <button onClick={() => setEdit(true)} type="submit" className="w-fit h-fit bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] bg-transparent bg-clip-border p-[2px] rounded-md">
                            <p className="font-roboto rounded-md text-white px-5 py-[2px] bg-black text-opacity-70">Edit</p>
                        </button>
                    </div>
                        :
                        <div className="flex flex-col justify-center gap-5 items-center py-5 w-full relative  z-10">
                            {
                                isEdit ?
                                    <form onSubmit={handleSubmit(HandleProfileSubmission)} className="w-full flex flex-col justify-center items-center gap-5">
                                        <div className="flex items-center w-full justify-center gap-3">
                                            <div className="p-[2px] bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] rounded-full relative size-[51px] flex justify-center items-center overflow-hidden">
                                                <img src={profileImage || data?.profilePicture || profile_img} alt="" className="rounded-full absolute z-0 size-12 opacity-60" />

                                                <input type="file" {...register('img')} onChange={(e) => handleImageChange(e)} className="h-full w-full absolute opacity-0 z-30" />
                                                <div className="absolute z-10 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center flex-col">
                                                    <p className="text-[4px] text-center w-full font-roboto text-white font-bold ">upload profile picture</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className="w-32 flex flex-col justify-end gap-2">
                                                <input type="text" {...register('name')} className="text-xl outline-none w-[130px] font-roboto text-white " defaultValue={data?.fullName} />
                                                <p className="text-xs font-roboto text-[#999999]">@{data?.username}</p>
                                            </div>
                                        </div>

                                        <button type="submit" className="w-fit h-fit bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] bg-transparent bg-clip-border p-[2px] rounded-md">
                                            <p className="font-roboto rounded-md text-white px-5 py-[2px] bg-black text-opacity-70">
                                                {isLoadingFinally ? <span className="loading loading-dots loading-xs"></span>
                                                    : 'Save'}</p>
                                        </button>
                                    </form>
                                    :
                                    <>
                                        <div className="flex items-center gap-3">
                                            <div className="p-[2px] bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] rounded-full relative  size-[51px] flex justify-center items-center overflow-hidden">
                                                <img src={data?.profilePicture ? data?.profilePicture : profile_img} alt="" className="rounded-full absolute z-0 size-12" />
                                            </div>

                                            <div className="">
                                                <p className="text-xl font-roboto text-white ">{data?.fullName}</p>
                                                {
                                                    User ?
                                                        <p className="text-xs font-roboto text-[#999999]">invited by {User}</p>
                                                        :
                                                        <p className="text-xs font-roboto text-[#999999]">@{data?.username}</p>

                                                }
                                            </div>
                                        </div>

                                        <button onClick={() => setEdit(true)} type="submit" className="w-fit h-fit bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] bg-transparent bg-clip-border p-[2px] rounded-md">
                                            <p className="font-roboto rounded-md text-white px-5 py-[2px] bg-black text-opacity-70">Edit</p>
                                        </button>
                                    </>
                            }
                        </div>
                }

            </div>
        </div>
    );
};

export default Profile_temp;