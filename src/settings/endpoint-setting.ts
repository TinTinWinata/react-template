import { Method } from '../enums/method-enum';
import { IEndpoint } from '../interfaces/endpoint-interface';

// Example endpoint configuration, that will be used for service.tsx

export interface EndpointList {
  auth: AuthEndpoint;
}

interface AuthEndpoint {
  login: IEndpoint;
}

const AUTH_ENDPOINT: AuthEndpoint = {
  login: {
    method: Method.POST,
    url: '/auth/login',
  },
};

export const ENDPOINT_LIST: EndpointList = {
  auth: AUTH_ENDPOINT,
};
