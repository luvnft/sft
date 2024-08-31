import BaseQuery from "./BaseQuery";

const AdminEndpoint = BaseQuery.injectEndpoints({
    endpoints: (builder)=> ({
        LoginAdmin: builder.mutation({
            query: (arg)=>({
                url: '/admin/login',
                body: arg,
                method: 'POST'
            })
        })
    })
});

export const {useLoginAdminMutation} = AdminEndpoint;