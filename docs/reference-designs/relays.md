---
sidebar_position: 7
---

# Relays
Relay screens contain many opportunities not yet explored. Depending on how the relays are used by the client (manually set, or automatically applied), we can design the interface in different ways. We can also make relay information more useful by welcoming people to learn more about relays and explore them. 

Besides showing relays users are connected to, we also recommend some popular relays. In some cases the bitcoin symbol is not clear enough that the relay is paid so we use text to label them as free or paid. 
<img src={require('@site/static/img/relays/Relay-Settings.png').default} />

## Relay Settings on Mobile
This is a sample mockup of what relays could look like in Mobile Settings > Relays. Some clients also call this "Networking". 
<img src={require('@site/static/img/relays/Mobile-Relay-Settings.png').default} />

## Relay Information
Examples of what relay lists may look like on a mobile client. Clicking through the relay might present more meaningful information.
<img src={require('@site/static/img/relays/Mobile-Profile-Relays.png').default} />

## Mobile Relay Display Variation
The previous view, but with buttons in place of icons.
<img src={require('@site/static/img/relays/Mobile-Profile-Relays-Variation.png').default} />

## Relay Information View
In this example we can see specific relay information (assuming one relay per topic). The idea is to give users some additional insights into how relays handle notes - what type of policies if any they have in place, their location, ping time etc. 
<img src={require('@site/static/img/relays/Desktop-Relay-Info.png').default} />

## Relay Browsing
This is a hypothetical example of a client interface with a list of relays as categories. Selecting the relay category updates the notes feed. Users automatically join the relay or a relay set as they navigate the client.
<img src={require('@site/static/img/relays/Browse-by-relay.png').default} />

## Topic-Based Relays Grid
In this example, the user is browsing Philosophy-centered notes on a relay that is dedicated to Philosophy topics exclusively. Currently we do not have relays that function this way as far as we know.
<img src={require('@site/static/img/relays/Browse-by-relay-v2.png').default} />

## Exploring by Relay Sets
The following is a hypothetical user experience for browsing multiple topic-based relays as part of a "relay set". The idea is to fetch content that falls under grouped categories but can live on various relays around the world.
**Pictured UX:**
- User automatically joins the relay when they click on it
- When the user visits another “category” aka relay, they leave the last one
- When the user visits “all” relays, they join all automatically

<img src={require('@site/static/img/relays/browse-by-v3.png').default} />

## Relay Set Modal
**Pictured UX**
- Clicking on the relay icons next to each relay set will display them in a modal
- Users can join or leave relay by relay or in bulk
- Users can search for other relays (search is optional)
  
<img src={require('@site/static/img/relays/view-relay-set.png').default} />
