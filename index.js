// z35t — bare-bones ESM library entry point.
// Each namespace lives in its own folder under src/ and is re-exported
// here. Import the whole thing for `z35t.testing.hello(...)`, or import
// a submodule's file directly (e.g. src/testing/index.js) to skip
// fetching namespaces you don't use.

export * as testing from "./src/testing/index.js";

/** Current library version. */
export const version = "0.1.0";
