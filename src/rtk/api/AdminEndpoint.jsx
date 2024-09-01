import BaseQuery from "./BaseQuery";

const AdminEndpoint = BaseQuery.injectEndpoints({
    endpoints: (builder) => ({
        LoginAdmin: builder.mutation({
            query: (arg) => ({
                url: '/admin/login',
                body: arg,
                method: 'POST'
            })
        }),
        AddTask: builder.mutation({
            query: (arg) => ({
                url: '/create-task',
                body: arg,
                method: 'POST'
            }),
            invalidatesTags: ["AdminTask"]
        }),
        UpdateTask: builder.mutation({
            query: (arg) => ({
                url: '/update-task',
                body: arg,
                method: 'PUT'
            }),
            invalidatesTags: ["AdminTask"]
        }),
        AdminTaskList: builder.query({
            query: () => ({
                url: '/admin/task',
                method: 'GET'
            }),
            providesTags: ["AdminTask"]
        })
    })
});

export const { useLoginAdminMutation, useAddTaskMutation, useUpdateTaskMutation, useAdminTaskListQuery } = AdminEndpoint;