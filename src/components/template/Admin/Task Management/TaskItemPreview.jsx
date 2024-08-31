
const TaskItemPreview = ({ data }) => {
    return (
        <div className="flex items-center justify-between gap-3 my-3 border-b border-[#FFFFFF26] pb-3">
            <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 12 19" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 4.50229C3.60457 4.50229 4.5 3.60686 4.5 2.50229C4.5 1.39772 3.60457 0.502289 2.5 0.502289C1.39543 0.502289 0.5 1.39772 0.5 2.50229C0.5 3.60686 1.39543 4.50229 2.5 4.50229ZM9.5 4.50229C10.6046 4.50229 11.5 3.60686 11.5 2.50229C11.5 1.39772 10.6046 0.502289 9.5 0.502289C8.39543 0.502289 7.5 1.39772 7.5 2.50229C7.5 3.60686 8.39543 4.50229 9.5 4.50229ZM4.5 9.50229C4.5 10.6069 3.60457 11.5023 2.5 11.5023C1.39543 11.5023 0.5 10.6069 0.5 9.50229C0.5 8.39772 1.39543 7.50229 2.5 7.50229C3.60457 7.50229 4.5 8.39772 4.5 9.50229ZM9.5 11.5023C10.6046 11.5023 11.5 10.6069 11.5 9.50229C11.5 8.39772 10.6046 7.50229 9.5 7.50229C8.39543 7.50229 7.5 8.39772 7.5 9.50229C7.5 10.6069 8.39543 11.5023 9.5 11.5023ZM11.5 16.5023C11.5 17.6069 10.6046 18.5023 9.5 18.5023C8.39543 18.5023 7.5 17.6069 7.5 16.5023C7.5 15.3977 8.39543 14.5023 9.5 14.5023C10.6046 14.5023 11.5 15.3977 11.5 16.5023ZM2.5 18.5023C3.60457 18.5023 4.5 17.6069 4.5 16.5023C4.5 15.3977 3.60457 14.5023 2.5 14.5023C1.39543 14.5023 0.5 15.3977 0.5 16.5023C0.5 17.6069 1.39543 18.5023 2.5 18.5023Z" fill="#999999" />
                </svg>

                <p className="font-roboto text-xl border rounded-md px-3 py-1 border-opacity-20 text-white border-white capitalize max-w-72 line-clamp-1">{data?.title}</p>
            </div>

            <div className="flex gap-3 items-center">
                <div className="dropdown dropdown-bottom dropdown-end h-fit">
                    <div tabIndex={0} role="button" className="border rounded-md px-3 border-opacity-20 border-white flex gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                            <path d="M2 3L6 7M9 0V6M16 3L12 7M18 10H13M12 13L16 17M9 14V19M6 13L2 17M5 10H0" stroke="white" strokeWidth="2" />
                        </svg>
                        {
                            data?.isPause === true ?
                                <div className="m-1 font-roboto text-xl text-white">Drift</div> :
                                <div className="m-1 font-roboto text-xl text-white">Live</div>
                        }
                    </div>

                    <ul tabIndex={0} className="dropdown-content menu rounded-t-md rounded-l-md rounded-r-md z-[1] w-52 p-2 border bg-transparent">
                        <li className="border rounded-md font-roboto text-sm text-white font-bold"><a>Live</a></li>
                        <li className="border rounded-md font-roboto text-sm text-white font-bold mt-3"><a>Drift</a></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-bottom dropdown-end h-fit">
                    <div tabIndex={0} role="button" className="border rounded-md px-3 py-1 border-opacity-20 border-white flex gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M17.8074 7.49842L13.5779 7.13448C13.3303 7.11317 13.1013 6.99437 12.9412 6.8042C12.7812 6.61404 12.7033 6.36809 12.7246 6.12047C12.7459 5.87284 12.8647 5.64383 13.0549 5.48379C13.245 5.32376 13.491 5.24583 13.7386 5.26714L15.9794 5.45995C15.0421 4.29506 13.7779 3.43703 12.3493 2.9961C10.9206 2.55518 9.39275 2.55151 7.96199 2.98556C6.53123 3.41961 5.26294 4.27155 4.32006 5.43192C3.37719 6.5923 2.80282 8.00809 2.67074 9.4974C2.64943 9.74502 2.53063 9.97404 2.34046 10.1341C2.1503 10.2941 1.90435 10.372 1.65673 10.3507C1.4091 10.3294 1.18008 10.2106 1.02005 10.0205C0.860024 9.83029 0.78209 9.58434 0.803397 9.33672C0.96522 7.51387 1.65722 5.77829 2.79399 4.34417C3.93076 2.91005 5.46255 1.84014 7.20034 1.26649C8.93812 0.692846 10.8058 0.640556 12.573 1.11608C14.3401 1.59161 15.9294 2.57413 17.1446 3.94241L17.2868 2.28981C17.3081 2.04219 17.4269 1.81317 17.6171 1.65314C17.8073 1.49311 18.0532 1.41517 18.3008 1.43648C18.5485 1.45779 18.7775 1.57659 18.9375 1.76676C19.0975 1.95692 19.1755 2.20287 19.1542 2.45049L18.7926 6.65201C18.7696 6.89304 18.6541 7.11579 18.4705 7.27358C18.2868 7.43137 18.0492 7.51194 17.8074 7.49842ZM9.33671 19.4768C6.94373 19.264 4.72386 18.1403 3.1356 16.3378L2.99339 17.9904C2.97209 18.238 2.85328 18.4671 2.66312 18.6271C2.47296 18.7871 2.22701 18.8651 1.97938 18.8438C1.73176 18.8224 1.50274 18.7036 1.34271 18.5135C1.18268 18.3233 1.10474 18.0774 1.12605 17.8297L1.48758 13.6282C1.50889 13.3806 1.62769 13.1516 1.81785 12.9915C2.00802 12.8315 2.25397 12.7536 2.50159 12.7749L6.70311 13.1364C6.95074 13.1577 7.17975 13.2765 7.33979 13.4667C7.49982 13.6569 7.57775 13.9028 7.55644 14.1504C7.53514 14.3981 7.41633 14.6271 7.22617 14.7871C7.036 14.9471 6.79006 15.0251 6.54243 15.0038L4.30162 14.8109C5.2384 15.9752 6.50175 16.833 7.92951 17.2741C9.35727 17.7153 10.8843 17.7197 12.3146 17.2867C13.7448 16.8538 15.0131 16.0033 15.9566 14.8444C16.9 13.6856 17.4756 12.2712 17.6095 10.7828C17.6308 10.5352 17.7496 10.3062 17.9398 10.1462C18.1299 9.98613 18.3759 9.9082 18.6235 9.9295C18.8711 9.95081 19.1001 10.0696 19.2602 10.2598C19.4202 10.4499 19.4981 10.6959 19.4768 10.9435C19.3713 12.1696 19.0253 13.363 18.4587 14.4554C17.892 15.5478 17.1157 16.5179 16.1741 17.3103C15.2325 18.1026 14.144 18.7018 12.9709 19.0736C11.7977 19.4453 10.5628 19.5823 9.33671 19.4768Z" fill="white" />
                        </svg>
                        <span className="font-roboto text-xl text-white">Live</span>
                    </div>

                    <ul tabIndex={0} className="dropdown-content menu rounded-t-md rounded-l-md rounded-r-md z-[1] w-52 p-2 border bg-transparent">
                        <li className="border rounded-md font-roboto text-sm text-white font-bold"><a>None</a></li>
                        <li className="border rounded-md font-roboto text-sm text-white font-bold mt-3"><a>Daily</a></li>
                        <li className="border rounded-md font-roboto text-sm text-white font-bold mt-3"><a>Weekly</a></li>
                        <li className="border rounded-md font-roboto text-sm text-white font-bold mt-3"><a>Monthly</a></li>
                    </ul>
                </div>


                <div className="dropdown dropdown-end h-fit">
                    <div tabIndex={0} role="button" className="border rounded-md px-3 py-1 border-opacity-20 border-white flex gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M20 8.14324C20.1 7.64324 19.7 7.04324 19.2 7.04324L13.5 6.24324L10.9 1.04324C10.8 0.843243 10.7 0.743243 10.5 0.643243C10 0.343243 9.4 0.543243 9.1 1.04324L6.6 6.24324L0.9 7.04324C0.6 7.04324 0.4 7.14324 0.3 7.34324C-0.1 7.74324 -0.1 8.34324 0.3 8.74324L4.4 12.7432L3.4 18.4432C3.4 18.6432 3.4 18.8432 3.5 19.0432C3.8 19.5432 4.4 19.7432 4.9 19.4432L10 16.7432L15.1 19.4432C15.2 19.5432 15.4 19.5432 15.6 19.5432C15.7 19.5432 15.7 19.5432 15.8 19.5432C16.3 19.4432 16.7 18.9432 16.6 18.3432L15.6 12.6432L19.7 8.64324C19.9 8.54324 20 8.34324 20 8.14324Z" fill="url(#paint0_linear_149_827)" />
                            <defs>
                                <linearGradient id="paint0_linear_149_827" x1="20.0154" y1="9.74471" x2="-4.04487e-07" y2="10.3418" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FBD130" />
                                    <stop offset="1" stopColor="#27C9FF" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className="font-roboto text-xl text-white">{data?.points} SBP</span>
                    </div>

                    <ul tabIndex={0} className="dropdown-content menu rounded-t-md rounded-l-md rounded-r-md z-[1]  p-2 border bg-transparent">
                        <div className="rounded-md font-roboto text-sm text-white font-bold flex justify-between items-center gap-3 flex-row overflow-hidden w-full">
                            <input type="number" defaultValue={data?.points} className="bg-transparent outline-none text-white w-fit font-roboto py-1 px-3" placeholder="0" />
                            <button className="border p-3 rounded-xl bg-gray-600 ">✓</button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TaskItemPreview;