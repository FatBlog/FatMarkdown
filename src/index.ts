import { TransformEnvironment } from "./TransformEnvironment";

export const transformText = async (source: string, env?: TransformEnvironment): string => {

    let stream = new ReadableStream({
        start(controller) {
            controller.enqueue(source);
        }
    });

    const transformer = createTranfsormer(env);

    stream = stream.pipeThrough(transformer);

    const reader = stream.getReader.getReader();

    let readObj = await reader.read();

    let outputBuffer = '';

    while (!readObj.done) {

        outputBuffer += readObj.value;

        readObj = await reader.read();
    }

    return outputBuffer;
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