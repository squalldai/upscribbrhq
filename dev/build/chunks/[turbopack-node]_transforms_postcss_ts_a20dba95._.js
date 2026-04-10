module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/workspace/projects/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/86bb5__pnpm_d6e91a10._.js",
  "chunks/[root-of-the-server]__76f162c4._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/workspace/projects/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];