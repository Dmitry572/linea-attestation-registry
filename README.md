<h1 align="center">
  <br>
  <a href="https://docs.ver.ax/"><img src="https://raw.githubusercontent.com/Consensys/linea-attestation-registry/dev/doc/verax-logo-circle.png" alt="Verax"></a>
  <br>
  Verax Attestation Registry
  <br>
</h1>

<h4 align="center"><a href="https://docs.ver.ax/">Verax</a> is a shared registry for storing attestations of
public interest on EVM
chains, designed to enhance data discoverability and consumption for dApps across
the network.</h4>

<p align="center">
  <a href="#links">Links</a> •
  <a href="#repository-organisation">Repository Organisation</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#contracts-addresses">Contracts Addresses</a> •
  <a href="#linking-attestations">Linking Attestations</a> •
  <a href="#license">License</a>
</p>

## Links

📚 [Official documentation](https://docs.ver.ax/)  
🔍
[Testnet GraphQL API](https://graph-query.goerli.linea.build/subgraphs/name/Consensys/linea-attestation-registry/graphql)  
🔍 [Mainnet GraphQL API](https://graph-query.linea.build/subgraphs/name/Consensys/linea-attestation-registry/graphql)  
🧱 [Verax SDK](https://www.npmjs.com/package/@verax-attestation-registry/verax-sdk) - **WIP**  
🌍 Verax Explorer - _Coming soon_

## Repository Organisation

```
.
├── contracts   # All smart contracts needed to run Verax
├── explorer    # Explorer frontend to discover the main objects
├── sdk         # The Verax SDK to easily interact with the contracts and the subgraph
├── subgraph    # The subgraph indexing Verax data
```

## Contributing

Verax Attestation Registry is a community-led initiative, with developers from various companies and different
backgrounds. While we are more than happy to get help from multiple sources, we need to rely on strong Ways of Working.

Don't hesitate to check our [Contribution Guide](./CONTRIBUTING.md) before pushing your first code to the repo!

## Contracts Addresses

The main contracts (i.e. the "registries") and the helpers contracts are deployed on:

- Linea Testnet
- Linea Mainnet
- Arbitrum Testnet
- Arbitrum Mainnet

Here are the addresses on those networks:

<details>
  <summary>Linea Testnet</summary>

- Router =
  [0x736c78b2f2cBf4F921E8551b2acB6A5Edc9177D5](https://goerli.lineascan.build/address/0x736c78b2f2cBf4F921E8551b2acB6A5Edc9177D5)
- AttestationRegistry =
  [0xC765F28096F6121C2F2b82D35A4346280164428b](https://goerli.lineascan.build/address/0xC765F28096F6121C2F2b82D35A4346280164428b)
- ModuleRegistry =
  [0x1a20b2CFA134686306436D2c9f778D7eC6c43A43](https://goerli.lineascan.build/address/0x1a20b2CFA134686306436D2c9f778D7eC6c43A43)
- PortalRegistry =
  [0x506f88a5Ca8D5F001f2909b029738A40042e42a6](https://goerli.lineascan.build/address/0x506f88a5Ca8D5F001f2909b029738A40042e42a6)
- SchemaRegistry =
  [0xB2c4Da1f8F08A0CA25862509E5431289BE2b598B](https://goerli.lineascan.build/address/0xB2c4Da1f8F08A0CA25862509E5431289BE2b598B)
- AttestationReader =
  [0x65c8294C7aF0f0bDDe51eF92AF850613bb629fc6](https://goerli.lineascan.build/address/0x65c8294C7aF0f0bDDe51eF92AF850613bb629fc6)

</details>

<details>
  <summary>Linea Mainnet</summary>

- Router =
  [0x4d3a380A03f3a18A5dC44b01119839D8674a552E](https://lineascan.build/address/0x4d3a380A03f3a18A5dC44b01119839D8674a552E)
- AttestationRegistry =
  [0x3de3893aa4Cdea029e84e75223a152FD08315138](https://lineascan.build/address/0x3de3893aa4Cdea029e84e75223a152FD08315138)
- ModuleRegistry =
  [0xf851513A732996F22542226341748f3C9978438f](https://lineascan.build/address/0xf851513A732996F22542226341748f3C9978438f)
- PortalRegistry =
  [0xd5d61e4ECDf6d46A63BfdC262af92544DFc19083](https://lineascan.build/address/0xd5d61e4ECDf6d46A63BfdC262af92544DFc19083)
- SchemaRegistry =
  [0x0f95dCec4c7a93F2637eb13b655F2223ea036B59](https://lineascan.build/address/0x0f95dCec4c7a93F2637eb13b655F2223ea036B59)
- AttestationReader =
  [0x40871e247CF6b8fd8794c9c56bB5c2b8a4FA3B6c](https://lineascan.build/address/0x40871e247CF6b8fd8794c9c56bB5c2b8a4FA3B6c)

</details>

<details>
  <summary>Arbitrum Testnet</summary>

- Router =
  [0x5f9df9EDC1F773e622cbD1F8C201c1560c1DF1a1](https://goerli.arbiscan.io/address/0x5f9df9EDC1F773e622cbD1F8C201c1560c1DF1a1)
- AttestationRegistry =
  [0xFEeE5646a93E8fF8035AB12A375eeE4EE4E834b3](https://goerli.arbiscan.io/address/0xFEeE5646a93E8fF8035AB12A375eeE4EE4E834b3)
- ModuleRegistry =
  [0x0D9212976f37c96b060f23f9Da5f389cB7A958B7](https://goerli.arbiscan.io/address/0x0D9212976f37c96b060f23f9Da5f389cB7A958B7)
- PortalRegistry =
  [0xCF68336D3f34fb688C7708cb285B0F86DFC44dA8](https://goerli.arbiscan.io/address/0xCF68336D3f34fb688C7708cb285B0F86DFC44dA8)
- SchemaRegistry =
  [0xAAce069f1026bAF1f86f05FC5e0934D2C3957528](https://goerli.arbiscan.io/address/0xAAce069f1026bAF1f86f05FC5e0934D2C3957528)
- AttestationReader =
  [0x628D6C3C9067AedD33404d827c2e9a4A4368dff3](https://goerli.arbiscan.io/address/0x628D6C3C9067AedD33404d827c2e9a4A4368dff3)

</details>

<details>
  <summary>Arbitrum Mainnet</summary>

- Router =
  [0xa77196867bB03D04786EF636cDdD82f37A1248a9](https://arbiscan.io/address/0xa77196867bB03D04786EF636cDdD82f37A1248a9)
- AttestationRegistry =
  [0x335E9719e8eFE2a19A92E07BC4836160fC31cd7C](https://arbiscan.io/address/0x335E9719e8eFE2a19A92E07BC4836160fC31cd7C)
- ModuleRegistry =
  [0x3acF4daAB6cbc01546Dd4a96c9665B398d48A4ba](https://arbiscan.io/address/0x3acF4daAB6cbc01546Dd4a96c9665B398d48A4ba)
- PortalRegistry =
  [0x4042D0A54f997EE3a1b0F51e4813654199BFd8bD](https://arbiscan.io/address/0x4042D0A54f997EE3a1b0F51e4813654199BFd8bD)
- SchemaRegistry =
  [0xE96072F46EA0e42e538762dDc0aFa4ED8AE6Ec27](https://arbiscan.io/address/0xE96072F46EA0e42e538762dDc0aFa4ED8AE6Ec27)
- AttestationReader =
  [0x324C060A26444c3fB9B93e03d31e8cfF4b1715C1](https://arbiscan.io/address/0x324C060A26444c3fB9B93e03d31e8cfF4b1715C1)

</details>

## Linking Attestations

Verax Attestation Registry allows creating links ("relationships") between attestations.  
🔗 Go to the [official documentation](https://docs.ver.ax/developer-guides/for-attestation-issuers/link-attestations)
for more details

Verax offers 2 Schemas to cover most use cases:

- The **Relationship** Schema, with ID `0x41b8c81288eebbf173b2f54b9fb2f1d37f2caca51ef39e8f99299b53c2599a3a`
- The **Named Graph Relationship** Schema with ID `0x8f83a0ef7871f63455a506f6bca0db98a88721764ae6dbde2afddd8e12e442b8`

## Managing Off-chain Attestations

To handle large payloads to attest and avoid increasing the gas cost for the attestation process, it is possible to host
the attested payload off-chain. In this case, the on-chain attestation will only contain a link to the attested payload,
based on a dedicated Schema called **Offchain**. It is available with ID
`0xa288e257097a4bed4166c002cb6911713edacc88e30b6cb2b0104df9c365327d`.

To use it, simply pass a payload with the following content:

```json
{
  "schemaId": "0x41b8c81288eebbf173b2f54b9fb2f1d37f2caca51ef39e8f99299b53c2599a3b",
  "uri": "https://example.com/payload/123"
}
```

- `schemaId`: the ID of the Schema encoding the complete (off-chain) payload
- `uri`: the link to the complete (off-chain) payload

## License

[MIT](./LICENSE)
