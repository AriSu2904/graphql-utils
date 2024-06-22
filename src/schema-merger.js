import { loadFilesSync } from "@graphql-tools/load-files";
import * as path from "path";
import { mergeTypeDefs } from "@graphql-tools/merge";

export const combineSchema = (directoryName) => {
  const typesArray = loadFilesSync(path.join(directoryName, "./**/*.graphql"));

  return mergeTypeDefs(typesArray);
};
