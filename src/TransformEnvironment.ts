import { IComponent } from "./components/IComponent";

export interface TransformEnvironment {

    isClientSide: boolean;

    components: Record<string, IComponent>;

}