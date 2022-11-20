import { RobotRepository } from './robot.repository';

describe('Given RobotRepository Service', () => {
    describe('When we instantiate it without an specified url', () => {
        let service: RobotRepository;
        beforeEach(() => {
            service = new RobotRepository();
        });

        test('Then if i use service.error(), it should return an error', () => {
            const error = service.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );

            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(error).toEqual(result);
        });

        test(`Then if I use service.getAll() 
            it should return a Promise of an Array of robots`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });

        test('Then if i use service.getAll() and the response went wrong it shold throw an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });

            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            await expect(async () => await service.getAll()).rejects.toThrow();
        });

        test(`Then if I use service.create()
                it should return a Promise of the crated robot`, async () => {
            const mockRobot = {
                id: '1',
                section: 'section',
                name: 'name',
                description: [],
                image: 'image',
                onsale: true,
                onsalePrice: 1,
                price: 1,
            };

            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockRobot),
            });
            const result = await service.create(mockRobot);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockRobot);
        });

        test('Then if i use service.create() and the response went wrong it shold throw an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });

            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            await expect(
                async () => await service.create({})
            ).rejects.toThrow();
        });

        test('Then if I use service.delete() it should return an undefined', async () => {
            const mockRobot = {
                id: '1',
                section: 'section',
                name: 'name',
                description: [],
                image: 'image',
                onsale: true,
                onsalePrice: 1,
                price: 1,
            };

            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({}),
            });
            const result = await service.delete(mockRobot.id);
            console.log(result);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });

        test('Then if i use service.delete() and the response went wrong it shold throw an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });

            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            await expect(async () => {
                await service.delete('');
            }).rejects.toThrow();
        });

        test('Then if I use service.update it should return', async () => {
            const mockRobot = {
                name: 'name',
            };

            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({}),
            });
            const result = await service.update(mockRobot);
            console.log(result);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });

        test('Then if i use service.update() and the response went wrong it shold throw an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });

            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            await expect(async () => {
                await service.update({});
            }).rejects.toThrow();
        });
    });
});
