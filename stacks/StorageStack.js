import { Table } from "@serverless-stack/resources";

export function StorageStack({ stack, app }) {

    const table = new Table(stack, "Notes", {
        fields: {
            userId: "string",
            notedId: "string",
        },
        primaryIndex: {
            partitionKey: "userId",
            sortKey: "notedId"
        },
    });
    
    return {
        table,
    };
}