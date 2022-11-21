import { Token } from '../types/types';

export class UserRepository {
    url: string;
    constructor() {
        this.url = process.env.REACT_APP_URL_LOGIN as string;
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    login(data: any): Promise<Token> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }
}
