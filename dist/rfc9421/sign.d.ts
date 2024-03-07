/// <reference types="node" />
import type { IncomingRequest, MapLikeObj, OutgoingResponse, SFVSignatureInputDictionary, SFVSignatureInputDictionaryForInput, HeadersLike } from "../types";
import { SFVHeaderTypeDictionary } from "./const";
export declare const requestTargetDerivedComponents: string[];
export declare const responseTargetDerivedComponents: string[];
export type Kot<T> = keyof T extends 'req' ? T : null;
/**
 * Class for creating signature base,
 * construct with a request or a response
 */
export declare class RFC9421SignatureBaseFactory<T extends IncomingRequest | OutgoingResponse> {
    sfvTypeDictionary: SFVHeaderTypeDictionary;
    response: OutgoingResponse | null;
    responseHeaders: HeadersLike | null;
    isRequest(): boolean;
    isResponse(): boolean;
    request: IncomingRequest;
    requestHeaders: HeadersLike;
    scheme: string;
    targetUri: string;
    url: URL;
    requestSignatureInput: SFVSignatureInputDictionary | undefined;
    responseSignatureInput: SFVSignatureInputDictionary | undefined;
    constructor(source: T, 
    /**
     * Must be signature params of the request
     */
    requestSignatureParams?: SFVSignatureInputDictionaryForInput | string, scheme?: string, additionalSfvTypeDictionary?: SFVHeaderTypeDictionary, 
    /**
     * Set if provided object is response
     */
    responseSignatureParams?: SFVSignatureInputDictionaryForInput | string);
    /**
     * Collect request or response headers
     */
    getHeadersMap(source: IncomingRequest | OutgoingResponse): HeadersLike;
    static inputSignatureParamsDictionary(input: SFVSignatureInputDictionaryForInput): SFVSignatureInputDictionary;
    get(name: '@query-param', paramsLike?: MapLikeObj<'name', string>): string;
    get(name: string, paramsLike?: MapLikeObj<'req' | 'key', string> | MapLikeObj<'sf' | 'bs' | 'tr', boolean>): string;
    generate(label: string): string;
}
