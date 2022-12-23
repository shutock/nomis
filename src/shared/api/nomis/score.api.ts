import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ScoreResponse, IData } from "./scoreResponse.interface";

interface IQuery {
  blockchain: string;
  address: string;
}

export const scoreApi = createApi({
  reducerPath: "scoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nomis.cc/api/v1",
  }),
  endpoints: (build) => ({
    walletScore: build.query<IData, IQuery>({
      query: ({ blockchain, address }: IQuery) => ({
        url: `${blockchain}/wallet/${address}/score`,
      }),
      transformResponse: (response: ScoreResponse) => response.data,
    }),
  }),
});

export const { useWalletScoreQuery, useLazyWalletScoreQuery } = scoreApi;
