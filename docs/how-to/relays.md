# Relays

<img src={require('@site/static/img/relays-cover.png').default} />

Relay discovery, continues to be a highly debated topic in the nostr community, primarily because the entire decentralization of the protocol depends on how people discover relays. 

Automating the decision for users may sound nice, but creates centralizing pressures. Giving users the ultimate control over relays is great from the point of view of decentralization, but it comes with its own UX challenges. Our goal as designers and developers is to find a balance that gives users as much optionality as possible without sacrificing simple and intuitive UI and UX. 

In this section we will look at the pros and cons of various approaches and reflect on ways to improve the overall UX while maintaining a high degree of decentralization. 

## Should relays share the spotlight?
Should we show relays prominently to users? Should they be tucked away into settings? Do we inform people which relay each note came from? Should relays be topic-specific or serve a variety of purposes? Is it ok to trust a few large relays as a starting point or does it create risk of centralization and abuse? 

These questions and many others are at the core of relay discovery and usage - which underpins the entire protocol. Depending on how you answer each question, the UX may differ greatly. 

The correct answer is likely "it depends". 

During onboarding we'll likely want to minimize the topics of relays as this is a high friction step which requires some learning. People have all sorts of questions about relays:

1. What are relays?
2. How many do I need?
3. Will people see my notes if I join this relay and not that one?

## Relay Selection
During the time of this writing, most clients ** pre-select a handful of relays** for new users. From a simple social client perspective, this is a good approach.

:::tip

Unless critical to the way people will experience your client, use progressive disclosure to ease users into new concepts like relays. They can always tweak their settings later or discover new relays via client UI.

:::

Since the person is likely just trying out the service, it's great to keep the learning curve to a minimum and use the progressive discovery method to expose the topic of relays later in the process. This way your client "just works", and who doesn't like that?

However, if your client uses relays as topic-based servers, you'll obviously want to present some topics to follow (relays to join). 

What about pre-selecting some relays but still showing this step in onboarding? 

The problem with that approach is it still introduces a learning curve which may overwhelm the user. Depending on how motivated they are to try nostr, they may go through the steps, ignore it entirely, or decide it is not for them and leave. 

As we speak, most relay names are not very telling of what the relay is about and how it is different, if at all. To a new user, the difference between `relay.damus.io` and `relay.nostr.band` is indistinguishable, and only brings up more questions than answers.

## Relay Presentation

There are multiple areas to present relays depending on how much flexibility we'd like to give our users. 

### Relays in client settings

The most obvious place is the settings area. Some things to consider:

- **Keep relay displays user-friendly.** Showing too much technical detail can scare non-technical users away. For example, since `wss://` repeats for every relay, we can abstract it away and allow people to enter the relay name instead (while showing the wss:// part in a muted color).
- **Consider adding an advanced mode** if you'd like to give your users ultimate control over their relays (read / write toggles, enabling which relays can access which parts of the app etc...)
- **Use unambiguous labels** to clearly label what things mean. For example, using the bitcoin logo for a paid relay may not be obvious to people who know nothing about bitcoin.
- **Provide additional resources** to learn more about relays
- **Provide some relay recommendations** for easy one-click additions
- **Consider creating a FAQ section** to address a few of the most asked questions such as "how many relays do I need?"

Here is an example of what a desktop relay settings area might look like:

<img src={require('@site/static/img/relay-display.png').default} />

And the corresponding mobile view:

<img src={require('@site/static/img/mobile-relay-presentation.png').default} />

### Displaying relays on profile pages

One way clients have enabled users to discover new relays is by showing them on each user's profiles. The only issue currently is that many clients don't tell you how many relays you share with that user, or even indicate that you already have that relay in your list. This makes it difficult to compare your relay lists or make sense of what to do with the relays. Should we add them? Why or why not?

Ideally, a profile page would indicate whether the user can see your notes (share the same relay, connect to an indexing relay or "share relays" via NIP65). 

For the time being, we can add a slight improvement by showing which relays the users have in common:

<img src={require('@site/static/img/mobile-profile-relays.png').default} />

## Relay Discovery

Currently there are two different approaches in which we can treat relays and how they are discovered. The first is when relays act as a "behind-the-scenes" hidden away mechanism. The user does not care what they are as they simply take their notes in and display them to other users. The other method is to put a spotlight on relays and treat them as first class citizens so to speak. In the second scenario, the relay is displayed front and center and acts as a main method of content discovery. Think of it like a subreddit. A subreddit = an individual relay. Want different content? Hop the relay to see totally different content. 

Depending on which method we choose, we can create different discovery scenarios. 

Most "traditional" types of clients will likely treat relays as a setting you can look at and forget. Tweak it just the right amount to get your preferred level of performance and forget all about it. This is how most clients currently work and relays are something you have to tinker with when you start, but later forget and just use the client as is. 

Places we can enable relay discovery in the "behind-the-scenes" approach:

1. **In the user settings.** Most clients will include a relays or a "network" tab under user menu or in the settings menu. 
2. **Discover more relays link** that leads people to a bigger list of relays (whether within client or outside of client)
3. **User profile page**, in a "relays" tab.



## Relays as first class citizens

The other approach to relay discovery is to elevate them to the primary method of navigation. One relay = one topic.

This model resembles forum categories or sub-reddits if we think about Reddit's navigation. 

In this setup, relays are dynamic, changing quickly and often. Unlike "set it and forget it" settings treatment, the person using the app is constantly jumping from relay to relay. 

Technically, there are no clients that enable this setup yet, but it's something that has been explored a little. The relay-per-community use case has been taken over by NIP-72 (Moderated Communities) which is already implemented in at least 3 clients. The question is whether the relay-per-topic is an efficient way of handling communities and that's up to the individual developer to decide and or to implement. For now, it remains in the halls of possibilities. 