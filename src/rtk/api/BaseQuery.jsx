import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseQuery = createApi({
    reducerPath: 'API',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1",
    }),
    tagTypes: ["user", "task"],
    endpoints: () => ({}),
    
});

export default BaseQuery;