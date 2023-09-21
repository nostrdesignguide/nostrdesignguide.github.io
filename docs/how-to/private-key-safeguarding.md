# Private Key Safeguarding

There is no password reset in Nostr. The moment the user leaks their keys, it’s game over and a new npub has to be created. 

Due to this drastic departure from the username/password model, we as designers and developers have to consider drastic measures to safeguard users’ accidental key leaking. 

## Preventing Accidental Pasting

The most obvious way people will likely leak their private keys is by copying / pasting the wrong thing and hitting enter without thinking. Damus (Will) did something clever and looked up the users’ npub based on the pasted nsec and automatically substituted it by tagging the user instead.

Prior to fix, the user would paste an actual nsec:
`nsec1t0kdnkaey5neuyx3ky22t43r5xpchnzy74sz4lkjl7fgj2k0pvqsqp5vsd`

After the fix, the nsec converts to the npub mention:
`@1qru0vtt:vq8qaeu8`

Damus also shows a warning when trying to post a note with the private key by detecting the format and displaying a message:

```
Note contains “nsec1” private key. Are you sure?
Yes, post with private key
No
```

We could go a step further and make an even more stern warning:
```
Warning! You are about to paste a private key! Doing so will allow everyone access to this account, forever. Are you absolutely sure you wish to proceed? 
No, get me to safety
Yes, I understand the consequences (in red)
```
### In summary:

:::warning DON'T:
- Allow people to paste secret keys without any warning
- Allow notes to go through with nsecs in them
:::

:::tip DO:
- Display a stern warning that the person is about to share an nsec
- Convert the nsec to an npub to prevent accidental sharing while ignoring the warning. 
:::

## Preventing leaking to prying eyes

In the legacy world, we allow users to preview their passwords, usually with an eye icon that toggles the visibility of the password.

This is NOT advisable UX for private keys. Users are better off not being able to toggle the visibility because keys are not something anyone would type in character by character. A copy button is more useful and guarantees the safekeeping of the private key.

It is easy enough to double check that you’re copying the correct private key and not some script-inserted fake key because the your private key should resolve to the public key being displayed. 

:::warning DON'T:
- Display private key in full at any point, or even partially
- Allow users to reveal their key, even to themselves
:::

:::tip DO:
- Add a copy button that copies the key on click
- Add a label explaining why the key cannot be revealed (“Your secret key is hidden to keep prying eyes away. Please copy it to a safe location”). 
:::

## Preventing phishing and website leaks

It is only a matter of time before phishing scams pop up to steal people’s nsecs. As a community, we have an early opportunity to establish a culture of solid nsec safekeeping by making it clear that allowing nsec pasting in logins is a bad idea.

This won’t prevent 100% of phishing scams, but it may save some people from sharing their keys with bad actors. 

The solution is simple: DO NOT ask for private keys in the login fields. Even though we can’t stop the user from pasting one instead of an npub-only login (without removing the input field entirely), we can discourage them with a message:

`We advise against using private keys for logging in as this may leak your account permanently.`  

You can get creative with the copy for your own needs.
