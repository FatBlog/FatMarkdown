import { TransformEnvironment } from "./TransformEnvironment";

export const transformText = (source: string, env?: TransformEnvironment): string => {
    return "";
};

export type PipeTransformer = {
    writable: WritableStream<string>;
    readable: ReadableStream<string>;
};

export const createTranfsormer = (env?: TransformEnvironment): PipeTransformer => {
    let enqueueInReadable: any;
    let closeReadable: any;
    let encoder = new TextEncoder

    return {
        writable: new WritableStream({
            write(chunk) {
                enqueueInReadable(encoder.encode(chunk));
            },
            close() {
                closeReadable()
            }
        }),

        readable: new ReadableStream({
            start(c) {
                enqueueInReadable = c.enqueue.bind(c);
                closeReadable = c.close.bind(c);
            },
        })
    };
}

export const transformPipe = (source: ReadableStream<string>): ReadableStream<string> => {
    return source.pipeThrough(createTranfsormer())
}