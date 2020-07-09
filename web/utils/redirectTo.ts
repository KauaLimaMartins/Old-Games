import Router from 'next/router';
import { ServerResponse } from 'http';

interface Options {
    res: ServerResponse | undefined;
    status: number;
}

export default function redirectTo(
    destination: string,
    { res, status }: Options = {} as Options
) {
    if (res) {
        res.writeHead(status || 302, { Location: destination });
        res.end();
    } else {
        if (destination[0] === '/' && destination[1] !== '/') {
            Router.push(destination);
        } else {
            window.location.pathname = destination;
        }
    }
}
