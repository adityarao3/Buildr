"use client";
import { toast } from "sonner";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Page = () => {
  const [value,setValue]=useState("");
const trpc=useTRPC();
const invoke=useMutation(trpc.invoke.mutationOptions({
  onSuccess:()=>{
    toast.success("Background Job started")
  }
}));
  return (
   <div className="p-4 max-w-7xl mx-auto">
    <Input value={value} onChange={(e)=>setValue(e.target.value)}/>
    <button  disabled={invoke.isPending} onClick={()=>invoke.mutate({value:value})} className="p-4 bg-blue-500 flex border-8 
    rounded-3xl">
Invoke Background Button
    </button>
   </div>
  )
}
export default Page;