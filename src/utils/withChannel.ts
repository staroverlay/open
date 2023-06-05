import { Context } from "hono";
import BadRequestException from "../errors/BadRequestException";
import { withStrQuery } from "./withQuery";

interface ChannelInfoQuery {
    id?: string;
    username?: string;
}

export function withChannel(c: Context): ChannelInfoQuery {
    const id = withStrQuery(c, "id", true);
    const username = withStrQuery(c, "username", true);

    if (!id && !username) {
        throw new BadRequestException("You must specify an username or an ID");
    }

    return { id, username }
}
