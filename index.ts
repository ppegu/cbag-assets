import registry from "./registry.json";

console.log("registry", registry.length);

const blockchainNamesArray = [
  ...new Set(registry.map((obj) => obj.blockchain)),
];

console.log(blockchainNamesArray.length);
