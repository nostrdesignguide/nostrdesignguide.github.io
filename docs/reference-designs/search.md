# Search
:::tip Resource
All of the designs on this page can be found in the [Reference Designs Figma File](https://www.figma.com/file/C2ztFLDxihrfturW7Q6kbj/Reference-Components?type=design&node-id=213%3A11495&mode=design&t=qbn9PiAj1v6RWRwM-1). Feel free to make a copy and use however you wish. This resource is open source without any limitations.
:::

## Basic Search - Default Desktop View
On mobile, we would just shrink the width.
<img src={require('@site/static/img/search/Simple-Search-Default.png').default} />

## Simple Search
Basic search for hashtags and usernames. Entering text will return results for notes containing that word. An advanced version of the simple search could return `Topics`. 
<img src={require('@site/static/img/search/Simple-Search.png').default} />

## Returned Results wth Filtering In-Content
In this example, a person has searched for "fi". We can present results from a variety of categories such as `Profiles`, `Notes & Replies`, `Hashtags` etc... 

## Combined Search
Combined search can be used to retrieve multiple types of results and enable in-search filtering. Below are some examples of how in-search filtering could look if implemented:

<img src={require('@site/static/img/search/Combined-Search.png').default} />

### Hashtags
Hashtags and other filtering criteria could be implemented as tabs within the search results. We added the number of notes under each hashtag to indicate the level of activity.

<img src={require('@site/static/img/search/Combined-Search-Hashtags.png').default} />

### Moderated Communities
Below is a sample of how moderated communities (NIP-72) could be surfaced in search.

<img src={require('@site/static/img/search/Combined-Search-Communities.png').default} />

### Apps
Some clients implement an apps tab to surface other nostr apps. 

<img src={require('@site/static/img/search/Combined-Search-Apps.png').default} />

<img src={require('@site/static/img/search/Combined-Search-DVM-Models.png').default} />

<img src={require('@site/static/img/search/Condensed-Search-Variation-w-Close.png').default} />

<img src={require('@site/static/img/search/Combined-Search-Relay-Groups.png').default} />

