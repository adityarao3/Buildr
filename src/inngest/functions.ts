
import { inngest } from "./client";
import { createAgent, gemini } from '@inngest/agent-kit';
export const AdityaBhai = inngest.createFunction(
    { id: "hello-worldji" },
    { event: "test/hello.world" },
    async ({ event }) => {
        const codeAgent = createAgent({
            name: 'code-agent',
            system: "You are an expert next.js developer.You write readable ,maintainable code ,write simple Next.js & React snippets",
            model: gemini({ model: "gemini-2.0-flash-lite" }),
        });
        const { output } = await codeAgent.run(
            `Write the  following snippet: ${event.data.value}`,
        );
        console.log(output);
        // [{ role: 'assistant', content: 'function removeUnecessaryWhitespace(...' }]

        return { output };
    },
);
