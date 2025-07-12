
import { createAgent, gemini } from '@inngest/agent-kit';
import { inngest } from "./client";

export const AdityaBhai = inngest.createFunction(
    { id: "hello-worldji" },
    { event: "test/hello.world" },
    async ({ event }) => {
        const codeAgent = createAgent({
            name: 'code-agent',
            system:
                "You are an expert next.js developer.You write readable,maintainable code. You write simple Next.js & React snippets.",
            model: gemini({ model: "gemini-1.5-flash-8b" }),
        });
        const { output } = await codeAgent.run(
            `Write the following snippet:${event.data.value}`
        );
        console.log(output);
        return { output };
    },
);
