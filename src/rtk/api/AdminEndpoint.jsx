import BaseQuery from "./BaseQuery";

const AdminEndpoint = BaseQuery.injectEndpoints({
    endpoints: (builder)=> ({
        LoginAdmin: builder.mutation({
            query: (arg)=>({
                url: '/admin/login',
                body: arg,
                method: 'POST'
            })
        }),
        AddTask: builder.mutation({
            query: (arg)=>({
                url: '/create-task',
                body: arg,
                method: 'POST'
            }),
            invalidatesTags: ["task"]
        }),
    })
});

export const {useLoginAdminMutation, useAddTaskMutation} = AdminEndpoint;