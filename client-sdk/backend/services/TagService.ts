/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTagParams } from '../models/CreateTagParams';
import type { CreateTagResponse } from '../models/CreateTagResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TagService {
  /**
   * Create a tag
   * Create a tag
   * @returns CreateTagResponse A tag
   * @throws ApiError
   */
  public static createTag({
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
    requestBody?: CreateTagParams,
  }): CancelablePromise<CreateTagResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/tag',
      path: {
        'cache': cache,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
