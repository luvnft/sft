import BaseQuery from "./BaseQuery";

const InjectEndpoint = BaseQuery.injectEndpoints({
    endpoints: (builder) => ({
        CreateAccount: builder.mutation({
            query: (arg) => ({
                url: '/create-account',
                method: 'POST',
                body: arg
            }),
            invalidatesTags: ["user"]
        }),
        MarkAsComplete: builder.mutation({
            query: (arg) => ({
                url: '/complete-task',
                method: 'POST',
                body: arg
            }),
            invalidatesTags: ["task"]
        }),
        FindAccount: builder.query({
            query: (arg) => ({
                url: '/find-account',
                method: 'GET',
                params: {
                    userId: arg
                }
            }),
            providesTags: ["user"]
        }),
        TaskList: builder.query({
            query: (arg) => ({
                url: '/task-list',
                method: 'GET',
                params: {
                    userId: arg
                }
            }),
            providesTags: ["task"]
        }),
        PointTable: builder.query({
            query: (arg) => ({
                url: '/point-table',
                method: 'GET',
                params: {
                    id: arg
                }
            }),
            providesTags: ["task"]
        }),
        UpdateAccount: builder.mutation({
            query: (arg) => ({
                url: '/update-account',
                method: 'PUT',
                body: arg
            }),
            invalidatesTags: ["user"]
        }),
        Leaderboard: builder.query({
            query: () => ({
                url: '/leaderboard',
                method: 'GET'
            }),
            providesTags: ["task"]
        }),
        ReferredSomeone: builder.mutation({
            query: (arg) => ({
                url: '/referred-someone',
                method: 'PUT',
                body: arg
            }),
            invalidatesTags: ["user"]
        }),
    })
});

export const { useCreateAccountMutation, useMarkAsCompleteMutation, useUpdateAccountMutation, useFindAccountQuery, useLeaderboardQuery, useTaskListQuery, usePointTableQuery } = InjectEndpoint;
