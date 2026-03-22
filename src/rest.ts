import { version } from "./constants";
import { PlumeAPIError } from "./errors";

export interface PlumeAPIRESTOptions {
    userAgent?: string;
}

export class PlumeAPIREST {
    public static readonly baseURL: string = "https://plume.voctal.dev/api";
    public static readonly defaultUserAgent: string = `plume-api.js/${version}`;

    public constructor(public readonly options: PlumeAPIRESTOptions = {}) {}

    public async request(method: string, path: string, body?: object): Promise<Response> {
        if (!path.startsWith("/")) {
            throw new Error(`Invalid path: ${path}`);
        }

        const headers = new Headers({
            "User-Agent": `${PlumeAPIREST.defaultUserAgent} ${this.options.userAgent || ""}`.trim(),
        });

        const url = `${PlumeAPIREST.baseURL}${path}`;

        let res;
        try {
            res = await fetch(url, { method, headers, body: body ? JSON.stringify(body) : undefined });
        } catch (err) {
            throw new PlumeAPIError(`Failed to fetch ${url}`, { cause: err });
        }

        if (!res.ok) {
            throw new PlumeAPIError(`Invalid response ${url}: ${res.statusText}`, undefined, res);
        }

        return res;
    }

    public async get<T = unknown>(path: string): Promise<T> {
        const res = await this.request("GET", path);
        return (await res.json()) as T;
    }

    public async file(path: string): Promise<Buffer> {
        const res = await this.request("GET", path);
        return Buffer.from(await res.arrayBuffer());
    }
}
