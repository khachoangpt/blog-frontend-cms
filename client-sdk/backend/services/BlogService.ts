/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateBlogParams } from '../models/CreateBlogParams';
import type { CreateBlogResponse } from '../models/CreateBlogResponse';
import type { PublishBlogResponse } from '../models/PublishBlogResponse';
import type { UpdateBlogParams } from '../models/UpdateBlogParams';
import type { UpdateBlogResponse } from '../models/UpdateBlogResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BlogService {
  /**
   * Create a blog
   * Create a blog
   * @returns CreateBlogResponse A blog
   * @throws ApiError
   */
  public static createBlog({
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
    requestBody?: CreateBlogParams,
  }): CancelablePromise<CreateBlogResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/blog',
      path: {
        'cache': cache,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Update a blog
   * Update a blog
   * @returns UpdateBlogResponse A blog
   * @throws ApiError
   */
  public static updateBlog({
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
    requestBody?: UpdateBlogParams,
  }): CancelablePromise<UpdateBlogResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/customer/blog',
      path: {
        'cache': cache,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Publish blog
   * Publish blog
   * @returns PublishBlogResponse A blog
   * @throws ApiError
   */
  public static publishBlog({
    id,
    cache,
  }: {
    /**
     * Id of blog
     */
    id: string,
    /**
     * Next.js option
     */
    cache?: {
      revalidate?: number;
      type?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
      tags?: Array<string>;
    },
  }): CancelablePromise<PublishBlogResponse> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/customer/blog/{id}',
      path: {
        'cache': cache,
        'id': id,
      },
    });
  }
}
