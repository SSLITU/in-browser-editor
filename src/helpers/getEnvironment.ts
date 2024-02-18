export const getEnvironment = (env: "Host" | "DB"): string => {
  // Todo: process.env does not work
  return process.env[env] ?? "http://localhost:3001/snippets";
};
