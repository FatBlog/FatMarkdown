import { IComponent } from "./IComponent";
import { ComponentContext } from "./ComponentContext";


export class ErrorWidget implements IComponent {

    name(): string {
        return "ErrorWidget";
    }

    render(context: ComponentContext): void {
        
        const {renderContext} = context;

        const errorMessage = '';

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