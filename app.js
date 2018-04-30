// requires the Wallet constructor

var Wallet = require('./wallet');

// create a test wallet
var w = Wallet.generate();

var address = w.getAddressString();
var key = w.getPrivateKeyString();

// log address and key
console.log({address,key});

var w2 = Wallet.fromPrivateKey(key);
console.log(w2.getAddressString() === address)
