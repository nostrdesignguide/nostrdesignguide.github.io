---
sidebar_position: 8
sidebar_label: 'FAQ'
---

# Nostr FAQs
Nostr users tend to have many questions about the protocol, UI and various UX. We have done our best to compile some answers to those questions so that you as a deisgner or developer can provide in-client tips, tooltips, descriptions and FAQ pages. Please feel free to copy and paste this page to your own in-client FAQ page. Also, use various responses from this page to create tooltips and descriptions for your UI, especially in areas such as the relay page and settings (nostr address, keys, etc...).

If you have any further questions, use the #asknostr hashtag for help. Keep in mind, some of this information may become obsolete since the protocol is under constant development. 

### What is nostr & how does it work?

Nostr stands for Notes and Other Stuff Transmitted by Relays. It is an open, permission-less protocol that aims to provide censorship-resistance and interoperability. It can be used to create social networks or just about any other type of app (other stuff part of the acronym). It is not a single website or app, but the glue that holds together many apps (clients). 

At its core, nostr consists of relays and events. A person does something (event) and this event is sent to a relay. The relay stores the event, then waits for another person to request it. The most common types of events are notes and reactions - the stuff social media is made of, but there are many other types of events.  It works very similar to how any other app would work with a database, except in nostr there is no single database, rather a large number of relays that store the events.

### What’s the big deal?

The big deal is that anyone can build on top of nostr and access the same user base. Prior to this companies relied on APIs which require permission to use. This means apps live in silos and can dictate everything a user does. It also means they can de-platform anyone at any time for any reason. On nostr, a person cannot be de-platformed or silenced. Since anyone can run a relay, everyone can have a backup of their own stats (followers, notes, etc) and can make that available to any app that requests it. If one app bans the user, they’ll still be found in another. Since there is no single database, it is very difficult to silence anyone. 

For the first time ever, creators can own the relationship with their followers and take it anywhere they wish to go. Speech is protected the way it should have been but hasn’t until now. 

### Why do I keep seeing “nostr” when I am using an app by a different name?
Your app (also called client) is just how you access the nostr protocol. It’s a bit like email - you use your email app to send email over SMTP, and people can read that email in an app of their choice. 

There are many apps which can access the same protocol.
### What is a relay & how do I join them?

A relay is just a server that stores events (data such as notes). When a person writes a note, they broadcast it to their relays. Another person who is connected to at least one of the same relays then sees that note and can re-broadcast it further. This is how notes spread on nostr. 

Most apps (clients) will automatically connect to a handful of relays when you start. You can discover other relays by inspecting people’s profiles and adding missing ones to your list. Some clients may also connect you to relevant relays automatically so you don’t have to think about that. 

### How many relays should I have?

On average, a person is able to reach a lot of their followers with 10-15 relays. Some clients will show the recommended relays shared by your followers so you can always be in touch.

### Is one relay better than another?

The goal of nostr is to enable censorship-resistant speech. This means notes need to be on as many relays as possible. However, since most people will have 10-15 relays on average, some relays are going to be more popular than others. Having a few large ones in your list is a good idea, but broadcasting to other small ones is important. 

In terms of quality, relays with good uptime, willingness to accept your notes, and close proximity should be prioritized. 

### Where can I find new relays?
1. Client settings. Some apps will recommend some relays in their settings.
2. Automatically connected. Some apps will automatically connect you to relays so you don’t need to worry about them at all.
3. Via other user relay settings. If you browse a profile of a person you follow, you will see their relay list and can add any missing ones to your list. Remember, it’s not Pokemon, you don’t need to catch them all!

### Where do I find new people to follow?
It depends on the client being used. Some may have more functionality than others. Here are some possible places to discover new people to follow:
1. Trending users
2. Trending notes
3. Trending hashtags
4. Popular hashtags 
5. Suggested follows
6. Followed by friends
7. Conversations - simply engaging in conversations and following interesting people.
8. Global (not recommended, but if you must).

### What is a client?
A client is just another name for an app. They are called clients because they act as one - fetching data from relays.

### What are private and public keys?
In nostr there are no databases and therefore no place to create an account. Instead, the protocol uses public-key cryptography to generate “keys”. It’s all very technical and is based on algorithms and math, but at the core you generate a key pair - a public key and a private one. These more or less act as username / password. You can think of a public key as your username (except anyone can access data associated with your username), and a private key as password. To post a note, you need to “sign it” with your key that proves you actually hold this secret key. 

Anyone can see your public key (often called npub). But only you have the password - the secret key (often called nsec) which authorizes you to publish as yourself. It’s a good idea to keep the private key safe - hence “private”. 

NEVER SHARE YOUR PRIVATE KEY. ONCE LEAKED, ANYONE WILL BE ABLE TO ACCESS YOUR PRIVATE MESSAGES AND POST AS YOU, FOREVER. THERE IS NO WAY TO RESET A KEY!!

### How should I manage my keys?

Your nsec (private key) is your super secret piece of information. Never disclose your private key! It is not possible to “reset” it. Once leaked, that key pair is done and you have to start over with a new one. There are some services that can help transfer your data from the old key to a new one, but they are still in development. 

NEVER input your private key into a website. Websites can leak data. Instead, use a signing extension where you add your key once and let the “signer” do the job of authorizing events such as notes on your behalf. 

Popular signer extensions:
- Alby (Chrome)
- Nos2X (Chrome)
- Nostr Connect (Chrome & Firefox) - based on Nos2X
- Amber (on Android)
- Nostore (on iOS Safari) 

### So, I can access any nostr app with my keys?

Yes, your private key is all that is needed to “sign in” to any app on nostr. You don’t need to re-register every time. This is one of the interesting things about nostr! 

### How come I don’t use an email to sign up or log in?

Email-based accounts rely on gated databases. Your email address is just a lookup field for your password. In nostr, there are no central databases hence no emails or passwords. You interact with the protocol with your public and private keys. 

### Why are my follower numbers inconsistent?
Different relays may have different information about your followers. It can be difficult for clients to get the accurate number since it is so dispersed. Some people find this to be a fun feature and not a bug. 

### What is a nostr address, do I need one? Where can I get it?

In traditional social media, users get “verified” by proving their identity with some state-issued document. The company confirms it and gives them a verified badge. This tells their followers they are who they say they are. 

Nostr does not require identification - it is pseudonymous. Since there is know KYC (know your customer) process, it is up to the user to prove their identity if they wish to. 

It is entirely possible to have 10 people with the same name and the same “handle” on nostr. Elon @elon
Elon @elon
Elon @elon
Etc...
A nostr address is a unique human-readable identifier that can help prove your identity. It looks like this:

bob@mydomain.com 

There can only be one bob@mydomain.com hence why it is unique. Any new Bob that registers on that domain will be Bob2, Bob3 or whatever name they choose. 

If you choose to have a nostr address, it’s an easy way to share your profile with people, but also to indicate to everyone that you are the real you and not an impersonator. 

Before nostr address: Elon @elon
With nostr address:  Elon elon@x.com 

The nostr address is entirely OPTIONAL. You do not need to have one to use nostr. However, it is available as a free service and people register one just to prove it’s them. 

A nostr address is not a scam-proof method of identification for reasons too lengthy to discuss here. 

### Am I anonymous on nostr? 

No. While you can post under a pseudonym and never share your identity, relays are able to see your IP address which could in theory be used to identify you in combination with some other things. It is best to use a VPN that is also not tied to you via any identification if you wish to remain anonymous. 

### What is “global”? 

Global is just the feed where all notes go by default. It’s usually a mess, but can be interesting. While nostr is growing, seeing the global chat can be a good way to discover content, but as nostr matures it may become less useful. 

### How do I minimize spam?

The simple way to minimize spam is to not visit Global. Once you’ve found some people to follow, browse through their following lists and discover new people through conversations to expand your network. 

Some nostr clients also utilize Web of Trust (WoT) scoring to minimize spam. 

### Why are some relays paid? Are they worth it?

Relays are the backbone of nostr. Without relays, nostr simply won’t work. Since there is no central company paying for all the infrastructure, relay costs are incurred by their operators. It is a good idea to help cover some of those costs by becoming a paid relay user. Paying for relays keeps the network functioning and healthy. 

Besides good will, paid relays can minimize spam and offer other services such as advanced filtering and translation. If you use nostr extensively, consider paying for a few relays, we’ll all be better for it.

### How do I edit or delete a note?

You can’t. Once posted, notes are there to stay. They cannot be edited or deleted. This is because notes are sent to relays and there is no way to control what a relay does. The only thing one can do on some clients is to request deletion, but it’s up to relays to honor that request.

### How can I delete my account?

The simple answer is you can’t because there is no “account”. Once a key pair is generated it will remain forever. The only thing you can do is remove your keys from a client. 

Your data can disappear if all the relays you published to decided to drop your data after some period of time to save on storage costs, so in a way that would “delete” your “account”. 

### How does muting work?

Mostly the same as any other social network. Once you mute a person, you will not see their notes in your feed. But, if someone else you follow posts, and the muted person replies, you will see a notice that there’s a muted reply. The same goes for the muted person replying to your note. You can still choose to view the reply, or skip it.