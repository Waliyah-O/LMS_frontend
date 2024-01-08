/* eslint-disable no-undef */
import { apiSlice } from "../redux/slices/apiSlice";

const extendedApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        sendOTP: builder.mutation({
            query: (credentials) => ({
                url: "/otp/sendOtp",
                method: "POST",
                body: JSON.stringify(credentials)
            }),
        }),

        verifyOTP: builder.mutation({
            query: (credentials) => ({
                url: "/otp/verifyOtp",
                method: "POST",
                body: JSON.stringify(credentials)
            }),
        }),

        async onQueryStarted(_, { queryFulfilled }) {
            try {
                const { data } = await queryFulfilled
                console.log(data)
            } catch (err) {
                alert('An error occurred. Please try again.')
                console.error(err)
            }
        },
    }),
})

export const { useSendOTPMutation, useVerifyOTPMutation } = extendedApi