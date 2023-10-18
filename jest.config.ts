export default {
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
    moduleFileExtensions: ["ts", "js", "json", "vue"],
    preset: 'ts-jest',
    transform: {
        "^.+\\.ts$": "babel-jest",
        "^.+\\.js$": "babel-jest",
        "^.+\\.vue$": "./vue-jest-prerun.cjs",
        "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: `./tsconfig.node.json` }],
    },
    "globals": {
        "vue-jest": {
          "hideStyleWarn": true
        }
      }
} as import("ts-jest").JestConfigWithTsJest