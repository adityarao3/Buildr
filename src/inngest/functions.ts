
import { inngest } from "./client";
import { createAgent, gemini } from '@inngest/agent-kit';
import { Sandbox } from "@e2b/code-interpreter";
import { getSandbox } from "./utils";
export const AdityaBhai = inngest.createFunction(
    { id: "hello-worldji" },
    { event: "test/hello.world" },
    async ({ event, step }) => {
        const sandboxId = await step.run("get-sandbox-id", async () => {
            const sandbox = await Sandbox.create("buildr-nextjs-test3");
            return sandbox.sandboxId;
        });
        const codeAgent = createAgent({
            name: 'code-agent',
            system: "You are an expert next.js developer.You write readable ,maintainable code ,write simple Next.js & React snippets",
            model: gemini({ model: "gemini-2.0-flash-lite" }),
        });
        const { output } = await codeAgent.run(
            `Write the  following snippet: ${event.data.value}`,
        );
        const sandboxUrl = await step.run("get-sendbox-url", async () => {
            const sandbox = await getSandbox(sandboxId);
            const host = sandbox.getHost(3000);
            return `https://${host}`;

        })
        // [{ role: 'assistant', content: 'function removeUnecessaryWhitespace(...' }]

        return { output, sandboxUrl};
    },
);
