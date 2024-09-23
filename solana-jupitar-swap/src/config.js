require('dotenv').config();

module.exports = {
  CLUSTER: process.env.CLUSTER || 'devnet',
  INPUT_MINT: process.env.INPUT_MINT,
  OUTPUT_MINT: process.env.OUTPUT_MINT,
  AMOUNT_TO_SWAP: process.env.AMOUNT_TO_SWAP,
};