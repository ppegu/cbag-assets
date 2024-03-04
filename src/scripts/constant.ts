import path from "path";

export const blockchainsPath = path.join(__dirname, "../../blockchains");
export const registryJsonPath = path.join(
  __dirname,
  "../../blockchains/registry.json"
);

const repoOwner = "ppegu";
const repoName = "cbag-assets";
const branchName = "main";

export function getGithubFileUrl(filePath: string) {
  const rawUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branchName}/${filePath}`;
  return rawUrl;
}
