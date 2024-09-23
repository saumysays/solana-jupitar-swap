const { Connection, PublicKey, Keypair } = require('@solana/web3.js');
   const { TOKEN_PROGRAM_ID } = require('@solana/spl-token');
   const config = require('./config');

   function getConnection() {
     return new Connection(config.RPC_ENDPOINT);
   }

   function getKeypair() {
     return Keypair.fromSecretKey(new Uint8Array(JSON.parse(config.PRIVATE_KEY)));
   }

   async function getTokenAccount(connection, wallet, mint) {
     const tokenAccounts = await connection.getParsedTokenAccountsByOwner(wallet, {
       programId: TOKEN_PROGRAM_ID,
     });

     return tokenAccounts.value.find((ta) => ta.account.data.parsed.info.mint === mint.toBase58());
   }

   module.exports = {
     getConnection,
     getKeypair,
     getTokenAccount,
   };