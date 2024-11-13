import {DataProvider} from '@refinedev/core';
import {AxiosInstance} from 'axios';
import {capitalizeFirstLetter} from '../utils';
import {generateFilter} from "@refinedev/simple-rest/src/utils";

/**
 * Check out the Data Provider documentation for detailed information
 * https://refine.dev/docs/api-reference/core/providers/data-provider/
 **/
export const dataProvider = (
    apiUrl: string,
    _httpClient: AxiosInstance, // TODO: replace `any` with your http client type
): DataProvider => ({
    getList: async ({resource, pagination, filters, sorters, meta}) => {
        const url = `${apiUrl}/${resource}/all`;

        console.log('getList', {
            resource,
            pagination,
            filters,
            sorters,
            meta,
            url,
        });

        const paginationQuery = {
            page: (pagination?.current || 10).toString(),
            pageSize: (pagination?.pageSize || 1).toString(),
        };

        const sortQuery = {
            sortBy: sorters ? sorters[0]?.field ? capitalizeFirstLetter(sorters[0]?.field) : 'Name' : 'Name',
            sortOrder: sorters ? sorters[0]?.order ? sorters[0]?.order : 'asc' : 'asc'
        }

        const response = await _httpClient.get(url, {
            params: {
                ...paginationQuery,
                ...sortQuery,
            },
        });

        //get x-metadata header from response
        const totalCount = response.headers['x-metadata'];

        console.log('getList response', {response});

        return {
            data: response.data,
            total: totalCount,
        };
    },

    getMany: async ({resource, ids, meta}) => {
        console.log('getMany', {
            resource,
            ids,
            meta,
        });

        // TODO: send request to the API
        // const response = await httpClient.get(url, {});

        return {
            data: [],
        };
    },

    create: async ({resource, variables, meta}) => {
        console.log('create', {
            resource,
            variables,
            meta,
        });

        console.log('this is variables ', variables);

        //format date
        if (variables.birthDate) {
            variables.birthDate = variables.birthDate.toISOString();
        }

        console.log('this is birthDate ', variables.birthDate);

        const url = `${apiUrl}/${resource}`;

        const {data} = await _httpClient.post(url, variables);

        return {
            data,
        };
    },

    update: async ({resource, id, variables, meta}) => {
        console.log('update', {
            resource,
            id,
            variables,
            meta,
        });

        const url = `${apiUrl}/${resource}/${id}`;

        const {data} = await _httpClient.put(url, variables);

        return {
            data,
        };
    },

    getOne: async ({resource, id, meta}) => {
        console.log('getOne', {
            resource,
            id,
            meta,
        });

        const url = `${apiUrl}/${resource}/${id}`;

        const response = await _httpClient.get(url);

        console.log('getOne response', {response});

        if (response.status < 200 || response.status > 299) throw response;

        const data = await response.data;

        return {data};
    },

    deleteOne: async ({resource, id, variables, meta}) => {
        console.log('deleteOne', {
            resource,
            id,
            variables,
            meta,
        });

        const url = `${apiUrl}/${resource}/${id}`;

        const {data} = await _httpClient.delete(url);

        return {
            data,
        };
    },

    getApiUrl: () => {
        return apiUrl;
    },

    custom: async ({
                       url,
                       method,
                       filters,
                       sorters,
                       payload,
                       query,
                       headers,
                       meta,
                   }) => {
        console.log('custom', {
            url,
            method,
            filters,
            sorters,
            payload,
            query,
            headers,
            meta,
        });

        // TODO: send request to the API
        // const requestMethod = meta.method
        // const response = await httpClient[requestMethod](url, {});

        return {} as any;
    },
});
