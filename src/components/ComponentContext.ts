import { TransformEnvironment } from "../TransformEnvironment";
import { RenderContext } from "../compiler/RenderContext";

export interface ComponentContext {

    environment: TransformEnvironment;

    renderContext: RenderContext;

    data: Record<string, any>;

    ex?: any;

}