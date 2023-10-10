# Wallet Connect
:::tip Resource
All of the designs on this page can be found in the [Reference Designs Figma File](https://www.figma.com/file/C2ztFLDxihrfturW7Q6kbj/Reference-Components?type=design&node-id=213%3A11495&mode=design&t=qbn9PiAj1v6RWRwM-1). Feel free to make a copy and use however you wish. This resource is open source without any limitations.
:::

Nostr clients have the option of showing connected lightning wallet balances in the interface. The process of connecting wallets is called one of several things: "Nostr Wallet Connect (NWC)", "Bitcoin Connect" or "Wallet Connect". For the sake of simplicity, and if the community approves, we'll refer to this process as "Wallet Connect" in this document. 


## Empty Wallet 
We limit the interface to be simple and inviting.
<img src={require('@site/static/img/wallet-connect/wallet-connect-1.png').default} />

## Connect a Wallet Modal
When the user clicks the "Connect Wallet" button, a modal appears with a list of wallets to choose from. Each option has a hover state. 
<img src={require('@site/static/img/wallet-connect/wallet-connect-2.png').default} />

## Connected Successfully
There are some steps with each option, but once finished the user would see a successful connection screen. The button can be customized to say anything such as "View Wallet" or "Done". Notice that we customize the app name within the copy below the heading. 
<img src={require('@site/static/img/wallet-connect/wallet-connect-3.png').default} />

## Connected Wallet View
Here we show that the Alby wallet is connected. If users wish to add a different one, they'll have to disconnect the current wallet to see the connect button. New wallet users might show a 0 balance, while people with existing wallet balances would see their balance here. 
<img src={require('@site/static/img/wallet-connect/wallet-connect-4.png').default} />

## Wallet with Balance Example
<img src={require('@site/static/img/wallet-connect/wallet-connect-5.png').default} />

## FAQ Modal
The info button pops up a modal with some helpful information about wallets, sats, zaps and more. The current answers are just placeholders.
<img src={require('@site/static/img/wallet-connect/wallet-connect-6.png').default} />