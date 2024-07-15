# toml-plugin-issue
Replicates an issue with the [typescript-toml-plugin](https://github.com/sapphi-red/typescript-plugin-toml) where it breaks with custom paths.

Reported issue: https://github.com/sapphi-red/typescript-plugin-toml/issues/2

In VSCode, run command pallete: "TypeScript: Select TypeScript Version..." -> Use Workspace Version to ensure the right ts is being used.
Follow the instructions in src/index.ts to see the crash.

### Setup
```bash
pnpm i
pnpm run dev
```
