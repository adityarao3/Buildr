"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Page = () => {
  const router=useRouter();
  const [value,setValue]=useState("");
const trpc=useTRPC();
const createProject=useMutation(trpc.projects.create.mutationOptions({
  onError:(error)=>{
    toast.error(error.message);
  },
  onSuccess:(data)=>{
    router.push(`/projects/${data.id}`);
  }
}));
  return (
   <div className="h-screen w-screen flex items-center justify-center">
    <div className="max-w-7xl mx-auto flex items-center flex-col gap-y-4 justify-center">
    <Input value={value} onChange={(e)=>setValue(e.target.value)}/>
    <button  disabled={createProject.isPending} onClick={()=>createProject.mutate({value:value})} className="p-4 bg-blue-500 flex border-8 
    rounded-3xl">
Submit
    </button>
   </div>
   </div>
  )
}
export default Page;