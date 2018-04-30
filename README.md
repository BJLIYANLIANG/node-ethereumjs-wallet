# node-ethereumjs-wallet

exposes the `Wallet` constructor of [ethereumjs-wallet](https://github.com/ethereumjs/ethereumjs-wallet)

or an easier way:

``` javascript
var window = {};
require('./ethereumjs-wallet.min');
var {Wallet,Buffer} = window;
var w = Wallet.generate();
```
