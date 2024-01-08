# Impostor Prevention

Since nostr doesn't have central servers and there is no way to authenticate any users, we run into the challenge of preventing impostors on the protocol. Some solutions have been devised, though none are perfect yet. Here we'll explore various concepts such as NIP5 (not a good prevention mechanism) along with other ways of preventing impostors. 

## NIP5 - Nostr Address

NIP5 or "Nostr Address" is a topic of ongoing discussion, please check back often for best practices. The Nostr Address is an optional shorthand way of referencing your account. It's a convenient way of sharing your profile verbally when copy and pasting npubs is not an option. **However, it should not be used as any form of identification or verification.** Though it **can** help deter scammers, there's no guarantee that it won't be abused. For most people, their nostr address is a vanity feature to show that they are affiliated in some shape or form with an entity. 

#### What a nostr address should be used for:
- Sharing your profile with people verbally. For example, when chatting on a podcast and letting people know where they can find you.
- That's pretty much the only use case that cannot be abused!

####  What a nostr address should NOT be used for:
- As any form of identification (scammers can use typo domains for high profile individuals and any random domain for an average user as people won't know which domain was used for your nostr address)
- To authenticate a note by displaying the nostr address along the display name. People will either not pay attention to it, or won't know if that's the legitimate domain. 
- To authenticate any profile. The address can help, but it's not a bulletproof solution. 

### Special consideration
A nostr address CAN be used to successfully "verify" a high profile individual, company or brand IF the person interacting with them actually clicks through the profile and verifies that there are no typos in the address. This, in combination with other forms of common sense verification (do they seem to have a correct number of followers? Do I already follow them?) can lend some trust to their profile. However, if the user is not familiar with their domain, a similar legitimate or even a scam domain could be used to fool enough people to inflict damage to everyone involved. 

## Best practice for displaying nostr addresses

### User Profile
Show the full address in the user's profile: 
<img src={require('@site/static/img/address-in-profile.png').default} />

### Direct Messages (Optional) 
You could also show the NIP5 in direct messages:
<img src={require('@site/static/img/nip5-in-dm.png').default} />

## Following Icon
One way to help deter scammers is to show which users are being followed. This may indicate that this is a legitimate person you've already interacted with, though it will not help deter new profiles from scamming. 

Some clients are already doing this via a checkmark next to the display name. However, a check mark can be misinerpreted or easily overlooked. Ideally, we would show a full text label to indicate that we're following this person, but this could get heavy on the visual look and feel. Developers could give users options to toggle off full text labels in favor of a simple checkmark, but the key is to have this be an opt-out action so the user understand what that checkmark means having seen the full label first.

<img src={require('@site/static/img/following-icon.png').default} />

- **Default label** - the label users would see when they follow people who comment on their notes
- **Mobile / toggled off text** - depending if the rest of design accomodates it, we could leave the full label on mobile or remove the text label. We can also give users an option to toggle off the text to show just the icon. This would help expose them to the text first, giving more clarity to what the icon means.
- **Icon variation** - depending on your icon sets, an icon with user and checkmark may be a bit more clear as to the meaning.

It is important to consider user feedback with each option. If users complain tha the icons alone (such as on mobile) are confusing, it may help to test the full label.

## "Possible impostor" label 
Client admins can utilize a strategy that compares the pixels in the display name and the profile image from people being followed to those who are not followed. If the names and image match a certain percentage, but the user is not followed, we can trigger a "possible impostor" label:

<img src={require('@site/static/img/impostor-warning.png').default} />

If you are building with Swift, here is an [example of a fully functional Impostor Checker code](https://github.com/nostur-com/nostur-ios-public/blob/main/Nostur/Profiles/ImposterChecker.swift) by Fabian Lachman. Fabian has implemented this on Nostur and was kind enough to share it! Thank you! For text comparison, Fabian used [SwiftMetric](https://github.com/autozimu/StringMetric.swift) and a [chatgpt conversation](https://chat.openai.com/share/d61496d6-0a38-48f6-863e-e8348143ba4f) for the image part. 