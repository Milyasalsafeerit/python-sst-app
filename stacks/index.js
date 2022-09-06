import { ApiStack } from "./ApiStack";
import { StorageStack } from "./StorageStack";


export default function main(app) {
  app.setDefaultFunctionProps({
    runtime: "python3.8",
    srcPath: "services",
    bundle: {
      installCommands : [
        "pip install --index-url https://domain.com/pypi/myprivatemodule/simple/ --extra-index-url https://pypi.org/simple -r requirements.txt ."
      ]
    }
  });
  app.stack(StorageStack).stack(ApiStack);
  // Add more stacks
}
