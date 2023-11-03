import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ITag } from "./tags.slice"

type TagsResponse = ITag[]

const tagsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4444/" }),
  reducerPath: "tagsApi",
  tagTypes: ["Tags"],
  endpoints: (build) => ({
    getTags: build.query<TagsResponse, void>({
      query: () => "tags",
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: "Tags", id })) : [],
    }),
    addTag: build.mutation<ITag, Partial<ITag>>({
      query: (body) => ({
        url: `tags`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Tags"],
    }),
  }),
})

// Auto-generated hooks
export const { useGetTagsQuery, useAddTagMutation } = tagsApi

// Possible exports
export const { endpoints, reducerPath, reducer, middleware } = tagsApi

export default tagsApi
// reducerPath, reducer, middleware are only used in store configuration
// endpoints will have:
// endpoints.getTags.initiate(), endpoints.getTags.select(), endpoints.getTags.useQuery()
// endpoints.addTag.initiate(), endpoints.addTag.select(), endpoints.addTag.useMutation()
// see `createApi` overview for _all exports_
