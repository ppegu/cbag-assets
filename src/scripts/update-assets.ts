import fs from "fs";
import path from "path";
import { blockchainsPath } from "./constant";

function readFolderInfo(path: string) {
  try {
    const info = JSON.parse(fs.readFileSync(path).toString());
    return info;
  } catch (error) {
    console.error(error);
    return;
  }
}

/**
 * update blockchains available folders assets
 * @param folder string
 */
function updateBlockchainAssets(folder: string) {
  try {
    console.log("Updating assets for:", folder);
    console.time(folder);
    const folderPath = path.join(blockchainsPath, folder);

    const info = JSON.parse(
      fs.readFileSync(path.join(folderPath, "info/info.json")).toString()
    );

    const assetsPath = path.join(folderPath, "assets");

    if (!fs.existsSync(assetsPath)) return;

    let assetsFolders = fs.readdirSync(assetsPath);

    assetsFolders.filter((f) =>
      fs.statSync(path.join(assetsPath, f)).isDirectory()
    );

    const tokens = [];

    /**assets info inside info/info.json */
    for (const folder of assetsFolders) {
      const infoPath = path.join(assetsPath, folder, "info.json");

      const info = readFolderInfo(infoPath);

      if (!info) continue;

      tokens.push({ ...info, network: folder });
    }

    /**update tokens.json inside the respective blockchain folder */
    const tokensPath = path.join(folderPath, "tokens.json");
    fs.writeFileSync(tokensPath, JSON.stringify(tokens, null, 2));

    console.log("Updated assets for:", folder);
    console.timeEnd(folder);
  } catch (error) {
    console.error(error);
  }
}

/**update blockchains assets/tokens within their respective folder */
function main() {
  console.log("Gethering and updating assets...");

  let folders = fs.readdirSync(blockchainsPath);

  folders = folders.filter((f) =>
    fs.statSync(path.join(blockchainsPath, f)).isDirectory()
  );

  for (const folder of folders) {
    updateBlockchainAssets(folder);
  }

  console.log("update completed.");
}

main();
