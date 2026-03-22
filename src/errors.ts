/**
 * Represents an API error.
 */
export class PlumeAPIError extends Error {
    /**
     * The raw API response.
     */
    public readonly res: Response | null;

    public constructor(message: string, options?: ErrorOptions | undefined, res?: Response | null) {
        super(message, options);
        this.res = res || null;
    }
}
