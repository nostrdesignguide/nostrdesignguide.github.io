---
sidebar_position: 2
---

# Unique Design Challenges

<img src={require('@site/static/img/challenges.png').default} />

Nostr, given its nature, presents some unique design challenges and personal rewards. Nostr introduces several new concepts that most people are not familiar with:

1. Cryptographic signing (public and private keys) - lack of centrally verified identity
2. Signing extensions
3. Relays
4. Zaps (if implemented)
5. NIPs (and why some things are supported by some clients and not others)
6. Deletion across tens to hundreds of relays (whereas Twitter has a sole database)

In this guide, we will explore how nostr deviates from traditional apps and offer some possible ways to address the challenges around these new concepts.

## Challenge #1: How do we explain key pairs?

In traditional applications, the user is accustomed to creating accounts with an email, username and password (in most cases the email is the username). In nostr, the user “creates an account” by generating a public/private key pair. The experience is very different from what people are accustomed to which could result in a wide variety of questions and emotions about what just happened:

- What is a public / private key?
- Why is there no email field?
- Where is the password field?
- What happens if I lose my keys?
- What do you mean I can see other people’s social feeds by signing in as them?
- Does that mean people can also read my DMs?
- Why are usernames not unique?
- What if someone impersonates me?
- What is a NIP5 identifier?
- Huh?!
- Feeling: This sounds complicated 🙁

Designers are faced with figuring out how to best ease the user into the client without overwhelming their first experience. 

- Do we add detailed explanations about each concept? Will the user read it? 
- Do we break the flow into a few onboarding steps that gently explains the concept of keys and then later gives a more thorough overview? 
- Do we show them a video?
- Do we even bother calling them keys? Can we call them username / password?
- Can we add small helpful tips to ease the user into the concepts?
- Do we even need a “registration” step? Can we allow the user to simply generate a key instantly without having to even think about these concepts? Will this just confuse them further?
- How do we explain key recovery if there’s no such thing as a recovery mechanism? 

We don’t really know what works best until we try it. Is there a correct way of handling keys? These are the questions we are faced with and must explore in practice to address.

[How to approach keys](https://nostrdesign.org/docs/how-to/onboarding/)

## Challenge #2: When and how do we introduce signing extensions?

Losing or exposing your private keys results in complete loss of your profile and the misstep is irreversible. This is a huge deviation from traditional email / password authentication. Nostr designers and developers are faced with the question of how to provide failsafe mechanisms to reduce the potential of leaking keys or total loss - both of which render the “account” unusable. 

To help address these issues, developers have introduced signing extensions which store your private key and sign on the user’s behalf without having to enter a private key into an app or a website. If the app is compromised, this could result in the key being leaked. 

Signing extensions have their own install process and onboarding which is an extra UX hurdle. Luckily, we do not need the extensions to sign up for the first time - a key is easily generated. The challenge is then in signing in on other clients after the initial nostr exploration. 

**Questions for designers:**
1. How should the user be educated about signing extensions? 
2. Do clients link to them within their settings? If not Settings, where?
3. To what extent do we need to explain these things? 

[Explore possible solutions](https://nostrdesign.org/docs/how-to/sign-in-sign-up/)
## Challenge #3: How do we explain relays?

Traditional apps are hosted on centralized servers. The user authenticates their credentials and data is then fetched and sent from and to a server or a set of servers.

In nostr, there are no central servers. Relays are responsible for communicating with clients and providing a history of signed events. But, what happens if some relays know some data about you, and others don’t? This may result in inconsistency of data (such as an inconsistent follower count, or missing notes and reactions). 

Inconsistent display of data and inconsistent experience across multiple clients (some may connect you to some relays and others to totally different ones. Differences in caching mechanisms could also impact how data is displayed. All of this may contribute to the impression that the app / client is broken and that it’s not ready for serious consideration.

[Explore Relay Interactions](https://nostrdesign.org/docs/how-to/relays/)

## Challenge #4: How do we explain zaps?

While not part of the core nostr protocol, zaps are popular enough that we should discuss them a bit here. Designers and developers have to consider where in the user journey zaps may be explained if at all. 

In this guide we will explore how current clients are explaining zaps (if they are) and where / how we can improve the overall user experience by doing a better job at arming the user with the necessary information.

[Explore Zaps](https://nostrdesign.org/docs/how-to/zaps/)

## Challenge #5: NIPs

Unlike email clients (e.g. yahoo email client, microsoft outlook email client, gmail email client etc.) which (explaining in an oversimplified way) either support or don't support the email protocol, nostr apps have tens of NIPs, and potentially hundreds of NIP candidates as nostr continues to grow. 

A design consequence of a multitude of opt-in NIPs means that there will be sets of apps with little overlap in supported NIPs. This means that a user of app X may not be able to interact with a user on app Y, or vice versa. This also means that unless this is surfaced to either users, they may not be aware that they cannot interact with users of another app. 

## Challenge #6: Deletion across tens to hundreds of relays

Event deletion in reference to [NIP-09](https://github.com/nostr-protocol/nips/blob/master/09.md]) on nostr carries a unique challenge of asking various distinct relay (i.e. database) admins to delete a particular event.
 
  ### Design considerations
  1. There is no guarantee of deletion on nostr. Therefore it is unintentionally misleading for nostr apps to refer a request to delete as a "delete".
  2. Superior terminology of "retract" sets expectations accordingly.

  ### Open & unanswered design questions
  1. Should the app team warn the user that there is no guarantee anything can be deleted, once posted to nostr?
  2. Should the app explain the difference between nostr relays with different admins, vs sole admin Twitter?
  3. If yes, when is the right moment for this? For instance, is it prior to the user's first nostr post? 


