import { Robot } from '../types/types';
import { Repository } from './repository';

export class RobotRepository implements Repository<Robot> {
    url: string;
    constructor() {
        this.url = process.env.REACT_APP_URL_ROBOTS as string;
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    getAll(): Promise<Array<Robot>> {
        return fetch(this.url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    create(robot: Partial<Robot>): Promise<Robot> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(robot),
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    delete(id: string): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            if (!response.ok) throw this.createError(response);
        });
    }

    update(partialRobot: Partial<Robot>): Promise<Robot> {
        return fetch(`${this.url}/${partialRobot._id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialRobot),
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }
}
