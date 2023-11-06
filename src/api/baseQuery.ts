import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react"
import getAccessToken from "./realmUtilities"

const baseQuery = fetchBaseQuery({
  baseUrl:
    "https://ap-south-1.aws.data.mongodb-api.com/app/application-0-itfjy/endpoint/",
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests

    const token = getAccessToken()
    if (token) {
      headers.set("Authorization", `Bearer ${token}`)
      headers.set("Content-Type", "application/json")
    }
    return headers
  },
})

const retryBaseQuery = retry(baseQuery, { maxRetries: 6 })

export default retryBaseQuery
