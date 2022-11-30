import { CreateUserRequest } from './dtos/create-user-request.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class AppService {
    private readonly communicationClient;
    private readonly analyticsClient;
    constructor(communicationClient: ClientProxy, analyticsClient: ClientProxy);
    private readonly users;
    getHello(): string;
    createUser(createUserRequest: CreateUserRequest): void;
    getAnalytics(): import("rxjs").Observable<any>;
}
