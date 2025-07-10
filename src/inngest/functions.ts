import { inngest } from "./client";

export const AdityaBhai = inngest.createFunction(
    { id: "hello-worldji" },
    { event: "test/hello.world" },
    async ({ event, step }) => {
//imagine this is a download step
        await step.sleep("wait-a-moment", "30s");
        //imagine this is a transcript step;
        await step.sleep("wait-a-moment", "10s");
        
        return { message: `Hello ${event.data.email}!` };
    },
);
