module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  testTimeout: 20000,
  restoreMocks: true,
  roots: ["./tests", "./src"],
  moduleFileExtensions: ["js", "json", "ts", "node"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
  ,
  testPathIgnorePatterns: ["/node_modules/"]
};
