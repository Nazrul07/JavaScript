// 1. Aliasing with 'as'
import { add as sum, PI as CIRCLE_PI } from "./36.01.01 mathUtils.mjs";

// 2. Importing the entire namespace with '* as'
import * as MathLibrary from "./36.01.01 mathUtils.mjs";

console.log("Using Aliased");
console.log("Sum:", sum(20, 30));
console.log("Constant:", CIRCLE_PI);
console.log();

console.log("Using Namespace")
console.log(MathLibrary.PI);
console.log(MathLibrary.add(100, 40));
console.log(new MathLibrary.default().multiply(2, 5));
console.log(MathLibrary.default.divide(10, 5));
console.log();

// 3. Modern Top-Level Await (No async function wrapper needed!)
console.log("\nSimulating Top-Level Await...");
const simulatedDbConnection = await new Promise((resolve) => {
    setTimeout(() => resolve("✅ Connected to Database!"), 100);
});

console.log(simulatedDbConnection);
