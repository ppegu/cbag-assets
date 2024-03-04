import fs from "fs";
import path from "path";
import {
  blockchainsPath,
  getGithubFileUrl,
  registryJsonPath,
} from "./constant";

function main() {
  console.log("Updating registry...");

  let folders = fs.readdirSync(blockchainsPath);

  /**filter out the blockchain folders */
  folders = folders.filter((f) =>
    fs.statSync(path.join(blockchainsPath, f)).isDirectory()
  );

  /**read info.json, we know its under info/info.json
   * ignore if file not exists
   */
  const blockchains = [];

  for (const folder of folders) {
    try {
      const infoBuffer = fs.readFileSync(
        path.join(blockchainsPath, folder, "info/info.json")
      );

      const info = JSON.parse(infoBuffer.toString());

      blockchains.push({
        ...info,
        logo: getGithubFileUrl(`blockchains/${folder}/info/logo.png`),
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**write blockchain/registry.json file */
  fs.writeFileSync(registryJsonPath, JSON.stringify(blockchains, null, 2));

  console.log("Updating registry completed...");
}

main();
