// Test that paths work for hello, but not for test.toml
import hello from "@src/hello";
// This will not work and will crash the TS server (check the ts status in VSCode)
import test from "@src/test.toml";
// To verify that relative paths work, comment out the previous line, and uncomment this version of the import and restart TS server
// import test from "./test.toml";

console.log(hello);