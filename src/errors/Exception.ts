import { HTTPException } from 'hono/http-exception';

export default class Exception extends HTTPException {
  constructor(status: number, kind: string, message: string) {
    super(status, {
      res: new Response(JSON.stringify({ error: { kind, message } }), {
        status,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    });
  }
}
