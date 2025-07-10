// "use client"//this is used for the client component and it also contains the trpc
import { Client } from "./client";
import { getQueryClient, trpc } from "@/trpc/server";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";
const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.CreateAI.queryOptions({ text: "Aditya PRefetch" }))

 

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>}>

        <Client />
      </Suspense>
    </HydrationBoundary>
  )
}
export default Page;