import { KeyValue } from '../Types';
import { ApiConfig } from '../Constants';

type ApiMethod = 'POST' | 'GET';

export const ApiRequest = (url: string, body: object = {}, apiMethod: ApiMethod = 'GET', additionalHeaders: KeyValue<string, string>[] = []) => {
    const headers = [{key: 'content-type', value: 'application/json'}];
    
    const token = window.localStorage.getItem('__bookshelf_token__')
    if (token) {
        headers.push({key: 'headers.Authorization', value: `Bearer ${token}`});
    }

    headers.concat(additionalHeaders);
    
    const request: RequestInit = {
      method: apiMethod,
      headers: getAssociativeArrayFromKeyValues(headers),
      body: JSON.stringify(body)
    }
  
    return window
      .fetch(`${ApiConfig.ApiBaseUrl}/${url}`, request)
      .then(res => res.json());
}

const getAssociativeArrayFromKeyValues = (keyValues: KeyValue<string, string>[]): string[][] => {
    const headers: string[][] = [];

    for (const kv of keyValues) {
        if (kv.hasOwnProperty('key')
          && kv.hasOwnProperty('value')) {
          
           headers.push([
            kv.key,
            kv.value
           ]);
        }
      }

      return headers;
}