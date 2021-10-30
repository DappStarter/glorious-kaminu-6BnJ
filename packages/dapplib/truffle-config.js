require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remember history hope enter outer gas'; 
let testAccounts = [
"0x3641c80492c8d8201fa41ecd4ae9ea609269eb8604b35ed1a43e78328a77bda7",
"0xca4394b556cf9814d829f36983890f8c71280dd2a4afaa2b48eac7ca4f5b6980",
"0x1c20f987d24ef04c9fb0dbec4c35afa6880642f7724fc6b8a26f7da7c5cdf49c",
"0x09d1e0c99016ac9db9b7ea246a48154006e8da315286607b4156653fe56ca1f7",
"0xdefa77d57e1d9d74543e6f98186a225721d9aae8f36d27ef9a17836fe0cace8d",
"0xc103797e1f24f9b64b2ec722ff2256ffdad01ed005a5e3fcdac2e06129e21d7b",
"0xb1929b177d38387b103cefe852cf427ca548da7fa28b4bc5b2df2e5dbbec5be2",
"0x9394195ed299357809afaf195060d5e40858e828e05ffaa5aedbb1a9cd7658b0",
"0x538f3baf68335df59ae9acee0d4eacaa6475377bb0538baff407e83324f1e547",
"0x32976e842a2f3dc1fb6fe3c0e663515ea919fea120467ab1575419d49d491f27"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

