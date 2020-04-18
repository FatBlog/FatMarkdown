import { TransformEnvironment } from "../TransformEnvironment";
import { RenderContext } from "../compiler/RenderContext";

export interface ComponentContext<T = Record<string, any>> {

    environment: TransformEnvironment;

    renderContext: RenderContext;

    data: T;

    ex?: any;

}