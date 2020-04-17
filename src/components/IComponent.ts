import { ComponentContext } from "./ComponentContext";
import { ComponentRenderError } from "./ComponentRenderError";

export interface IComponent {

    name(): string;

    render(context: ComponentContext): void | undefined | boolean | ComponentRenderError;

}