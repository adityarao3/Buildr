// "use client"//this is used for the client component and it also contains the trpc
"use client";
import { toast } from "sonner";

import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

const Page = () => {
const trpc=useTRPC();
const invoke=useMutation(trpc.invoke.mutationOptions({
  onSuccess:()=>{
    toast.success("Background Job started")
  }
}));

  return (
   <div className="p-4 max-w-7xl mx-auto">
    Test
    <button  disabled={invoke.isPending} onClick={()=>invoke.mutate({text:"John Bhaiya"})} className="p-4 bg-blue-500 flex border-8 
    rounded-3xl">
Invoke Background Button
    </button>
   </div>
  )
}
export default Page;