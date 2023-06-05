import { Context } from "hono";
import BadRequestException from "../errors/BadRequestException";

export function withStrQuery(c: Context, queryName: string, optional = false) {
    const query = c.req.query()[queryName];
    if (!query && !optional) {
        throw new BadRequestException("No query present: " + queryName);
    }
    return query;
}

export function withStrArrayQuery(c: Context, queryName: string, optional = false) {
    const query = c.req.query()[queryName];
    if (!query && !optional) {
        throw new BadRequestException("No query present: " + queryName);
    }
    return query ? query.split(",") : null;
}
