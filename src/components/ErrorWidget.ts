import { IComponent } from "./IComponent";
import { ComponentContext } from "./ComponentContext";


export interface ErrorWidgetParams {

    componentName: string;

}


export class ErrorWidget implements IComponent {

    name(): string {
        return "ErrorWidget";
    }

    render(context: ComponentContext): void {
        
        const {renderContext} = context;

        const {componentName} = context.data;

        const errorMessage = `An error occured when trying to render ${componentName || 'Component'}`;

        renderContext.writeCss(`
.ErrorWidget {
    background-color: #e66565;
    border: 3px solid #f00;
    text-align: center;
    align-items: center;
    justify-contents: center;
}
`);

        renderContext.writeToBody(`
<div class=ErrorWidget>
    ${errorMessage}
</div>
`);

    }

}