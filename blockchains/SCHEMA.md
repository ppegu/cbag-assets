`{
    "id": "bitcoin", #unique
    "name": "Bitcoin",
    "website": "https://bitcoin.org",
    "description": "Bitcoin is a cryptocurrency and worldwide payment system. It is the first decentralized digital currency, as the system works without a central bank or single administrator.",
    "explorer": {
        "url": "https://mempool.space",
        "txPath": "/tx/",
        "accountPath": "/address/",
        "sampleTx": "0607f62530b68cfcc91c57a1702841dd399a899d0eecda8e31ecca3f52f01df2",
        "sampleAccount": "17A16QmavnUfCW11DAApiJxp7ARnxN5pGX"
    },
    "research": "https://research.binance.com/en/projects/bitcoin",
    "symbol": "BTC",
    "type": "coin",
    "decimals": 8,
    "blockchain": "bitcoin",
    "status": "active",
    "chainId": string (optional),
    "derivation": [
        {
            "name": "segwit",
            "path": "m/84'/0'/0'/0/0",
            "xpub": "0x04b24746",
            "xprv": "0x04b2430c"
        },
        {
            "name": "legacy",
            "path": "m/44'/0'/0'/0/0",
            "xpub": "0x0488b21e",
            "xprv": "0x0488ade4"
        },
        {
            "name": "testnet",
            "path": "m/84'/1'/0'/0/0",
            "xpub": "0x04b24746",
            "xprv": "0x04b2430c"
        }
    ],
    "wif": "0x80",
    "hrp": "bc",
    "links": [
        {
            "name": "github",
            "url": "https://github.com/bitcoin"
        },
        {
            "name": "twitter",
            "url": "https://twitter.com/Bitcoin"
        },
        {
            "name": "reddit",
            "url": "https://reddit.com/r/Bitcoin"
        },
        {
            "name": "whitepaper",
            "url": "https://bitcoin.org/bitcoin.pdf"
        }
    ],
    "info": {
        "url": "https://bitcoin.org",
        "source": "https://github.com/trezor/blockbook",
        "rpc": "",
        "documentation": "https://github.com/trezor/blockbook/blob/master/docs/api.md"
    }
}`
