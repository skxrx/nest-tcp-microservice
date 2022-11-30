import { CreateUserEvent } from './events/create-user.event';
export declare class AppService {
    getHello(): string;
    handleUserCreated(data: CreateUserEvent): void;
}
