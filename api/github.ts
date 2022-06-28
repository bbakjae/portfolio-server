import { Request as Req, Response as Res } from "express";
import { spawn } from "child_process";
import crypto from "crypto";

export const githubCallbackHandler = async (req: Req, res: Res) => {
    try {
        console.log("Github Webhook Request received");
        const body = req.body;
        const hash256 = `sha256=${crypto
            .createHmac("sha256", process.env.GITHUB_WEBHOOK_SECRET!)
            .update(JSON.stringify(body))
            .digest("hex")}`;

        if (hash256 !== req.headers["x-hub-signature-256"]) {
            res.status(400).send({
                error: "invalid key",
                key: hash256,
            });
            return;
        }

        const targetRef = `refs/heads/${process.env.GITHUB_WEBHOOK_BRANCH_NAME}`;
        if (body.ref === targetRef) {
            console.log("running hook_github.sh");

            const deploySh = spawn("sh", ["hook_github.sh"], { detached: true });
            deploySh.stdout.on("data", (data) => {
                const buff = Buffer.from(data);
                const str = buff.toString("utf-8");
                if (str) console.log(str);
            });

            res.status(200).send({ success: true });
            return;
        }

        res.status(200).send({ skipped: true, targetRef });
        return;
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
};
