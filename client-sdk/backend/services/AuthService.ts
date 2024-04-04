/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginAdminParams } from '../models/LoginAdminParams';
import type { LoginAdminResponse } from '../models/LoginAdminResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
  /**
   * Login admin
   * Login admin
   * @returns LoginAdminResponse Login admin response
   * @throws ApiError
   */
  public static login({
    cache,
    requestBody,
  }: {
    /**
     * Next.js option
     */
    cache?: {
      revalidate?: number;
      type?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
      tags?: Array<string>;
    },
    requestBody?: LoginAdminParams,
  }): CancelablePromise<LoginAdminResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/admin/auth/login',
      path: {
        'cache': cache,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
