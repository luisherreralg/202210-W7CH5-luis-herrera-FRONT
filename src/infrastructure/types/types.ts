export type Robot = {
    _id: string;
    name: string;
    image: string;
    speed: number;
    endurance: number;
    creationDate: string;
    __v: number;
};

export type RobotsResponse = {
    robots: Array<Robot>;
};

export type ProtoRobot = {
    name: string;
    image: string;
    speed: number;
    endurance: number;
    creationDate: string;
};

export type Token = {
    token: string;
};
