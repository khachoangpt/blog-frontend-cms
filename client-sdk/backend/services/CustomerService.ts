/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetMeAdminResponse } from '../models/GetMeAdminResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CustomerService {
  /**
   * Get current customer
   * Get current customer
   * @returns GetMeAdminResponse Get current customer success
   * @throws ApiError
   */
  public static getMe({
    cache,
  }: {
    /**
     * Next.js option
     */
    cache?: {
      revalidate?: number;
      type?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
      tags?: Array<string>;
    },
  }): CancelablePromise<GetMeAdminResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/admin/me',
      path: {
        'cache': cache,
      },
    });
  }
}
