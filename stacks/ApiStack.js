import { Api, use } from "@serverless-stack/resources";
import { StorageStack } from "./StorageStack";


export function ApiStack({stack, app}){
    const { table } = use(StorageStack)

    const notesApi = new Api(stack, "NotesApi", {
        defaults: {
            function: {
                permissions: [table],
                environment: {
                    TABLE_NAME: table.tableName 
                },
            },
        },
        routes: {
            "GET /notes": "functions/list-notes.lambda_handler"
        },
    });

    stack.addOutputs(
        {
            ApiEndpoint: notesApi.url,
        }
    );
    
    return {
        notesApi,
    }
}