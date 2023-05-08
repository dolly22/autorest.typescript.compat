## API Report File for "@msinternal/openai_modular"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AzureKeyCredential } from '@azure/core-auth';
import { ClientOptions as ClientOptions_2 } from '@azure-rest/core-client';
import { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import { TokenCredential } from '@azure/core-auth';

// @public
export interface ChatChoice {
    delta?: ChatMessage;
    finishReason: CompletionsFinishReason;
    index: number;
    message?: ChatMessage;
}

// @public (undocumented)
export interface ChatCompletions {
    choices?: ChatChoice[];
    created: number;
    id: string;
    usage: CompletionsUsage;
}

// @public (undocumented)
export interface ChatCompletionsOptions {
    frequencyPenalty?: number;
    logitBias?: Record<string, number>;
    maxTokens?: number;
    messages: ChatMessage[];
    model?: string;
    n?: number;
    presencePenalty?: number;
    stop?: string[];
    stream?: boolean;
    temperature?: number;
    topP?: number;
    user?: string;
}

// @public
export interface ChatMessage {
    content?: string;
    role: ChatRole;
}

// @public
export type ChatRole = string;

// @public
export interface Choice {
    finishReason: CompletionsFinishReason;
    index: number;
    logprobs?: CompletionsLogProbabilityModel;
    text: string;
}

// @public (undocumented)
export interface ClientOptions extends ClientOptions_2 {
}

// @public (undocumented)
export interface Completions {
    choices?: Choice[];
    created: number;
    id: string;
    usage: CompletionsUsage;
}

// @public
export type CompletionsFinishReason = string;

// @public
export interface CompletionsLogProbabilityModel {
    textOffset?: number[];
    tokenLogprobs?: number[];
    tokens?: string[];
    topLogprobs?: Record<string, number>[];
}

// @public (undocumented)
export interface CompletionsOptions {
    bestOf?: number;
    echo?: boolean;
    frequencyPenalty?: number;
    logitBias?: Record<string, number>;
    logprobs?: number;
    maxTokens?: number;
    model?: string;
    n?: number;
    presencePenalty?: number;
    prompt?: string[] | string;
    stop?: string[];
    stream?: boolean;
    temperature?: number;
    topP?: number;
    user?: string;
}

// @public
export interface CompletionsUsage {
    completionTokens: number;
    promptTokens: number;
    totalTokens: number;
}

// @public
export interface EmbeddingItem {
    embedding: number[];
    index: number;
}

// @public (undocumented)
export interface Embeddings {
    data: EmbeddingItem[];
    usage: EmbeddingsUsage;
}

// @public (undocumented)
export interface EmbeddingsOptions {
    input: string | string[];
    model?: string;
    user?: string;
}

// @public
export interface EmbeddingsUsage {
    promptTokens: number;
    totalTokens: number;
}

// @public (undocumented)
export interface GetChatCompletionsOptions extends RequestOptions {
    accept?: "application/json";
    content_type?: string;
    frequencyPenalty?: number;
    logitBias?: Record<string, number>;
    maxTokens?: number;
    model?: string;
    n?: number;
    presencePenalty?: number;
    stop?: string[];
    stream?: boolean;
    temperature?: number;
    topP?: number;
    user?: string;
}

// @public (undocumented)
export interface GetCompletionsOptions extends RequestOptions {
    accept?: "application/json";
    bestOf?: number;
    content_type?: string;
    echo?: boolean;
    frequencyPenalty?: number;
    logitBias?: Record<string, number>;
    logprobs?: number;
    maxTokens?: number;
    model?: string;
    n?: number;
    presencePenalty?: number;
    prompt?: string[] | string;
    stop?: string[];
    stream?: boolean;
    temperature?: number;
    topP?: number;
    user?: string;
}

// @public (undocumented)
export interface GetEmbeddingsOptions extends RequestOptions {
    accept?: "application/json";
    content_type?: string;
    model?: string;
    user?: string;
}

// @public (undocumented)
export class OpenAIClient {
    constructor(endpoint: string, credential: AzureKeyCredential | TokenCredential, options?: ClientOptions);
    // (undocumented)
    getChatCompletions(messages: ChatMessage[], deploymentId: string, options?: GetChatCompletionsOptions): Promise<ChatCompletions>;
    // (undocumented)
    getCompletions(deploymentId: string, options?: GetCompletionsOptions): Promise<Completions>;
    // (undocumented)
    getEmbeddings(input: string | string[], deploymentId: string, options?: GetEmbeddingsOptions): Promise<Embeddings>;
}

// @public (undocumented)
export interface RequestOptions {
    // (undocumented)
    requestOptions?: {
        headers?: RawHttpHeadersInput;
        body?: unknown;
        queryParameters?: Record<string, unknown>;
        allowInsecureConnection?: boolean;
        skipUrlEncoding?: boolean;
    };
}

// (No @packageDocumentation comment for this package)

```