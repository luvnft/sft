import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseQuery = createApi({
    reducerPath: 'API',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1",
        // baseUrl: "https://sft-protocal-server.vercel.app/api/v1",
    }),
    tagTypes: ["user", "task", "AdminTask"],
    endpoints: () => ({}),
    
});

export default BaseQuery;