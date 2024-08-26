import BaseQuery from "./BaseQuery";

const InjectEndpoint = BaseQuery.injectEndpoints({
    endpoints: (builder) => ({
        CreateAccount: builder.mutation({
            query: (arg) => ({
                url: '/create-account',
                method: 'POST',
                body: arg
            })
        }),
        LoginAccount: builder.mutation({
            query: (arg) => ({
                url: '/find-account',
                method: 'POST',
                body: arg
            })
        })
    })
});

export const { useCreateAccountMutation } = InjectEndpoint;
