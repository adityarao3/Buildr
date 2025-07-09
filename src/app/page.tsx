import { prisma } from "@/lib/db";
const Page= async()=>{

  const Users=await prisma.user.findMany();

    return(
      
      <div>
        {JSON.stringify(Users,null,2)};
       
      </div>
    )  
}
export default Page;