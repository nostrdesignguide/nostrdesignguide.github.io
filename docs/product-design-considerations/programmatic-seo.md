---
sidebar_position: 4
---

# Programmatic SEO

<img src={require('@site/static/img/seo-cover.png').default} />

Clients that plan on sticking around for the long haul should consider SEO in their design and development as soon as possible. SEO is one of the most reliable methods of acquiring new users over the long term - even more powerful than advertising and referral systems. While not strictly a design topic, programmatic SEO should be considered in the overall design of the product as it will determine how your pages are structured to accommodate the most complex queries.

  

Programmatic SEO can make use of categorical content and user-generated content. This saves the founder / developer a lot of time from having to manually produce content for various search terms.

  

### Categorical SEO examples


A client like zap.stream could have various categories of content for example:

-   Game streams
    -   Game Name
        -   Valorant
        -   Diablo V
        -   Minecraft 
        -   etc...
    -   MMO streams
    
    -   FPS streams
    
    -   RPG streams
    
    -   etc…
    

-   Music Streams
    
-   Casual Chat Streams
    
-   eSports streams

#### Example of a programmatic SEO page: 
<img src={require('@site/static/img/seo-example.png').default} />
  In the image above we have the individual games as their own pages (1). The categories for the games are also pages (3). The game description helps on-page SEO (2). 

**Before:**

```
URL: zap.stream

Title: zap.stream

Page Heading: N/A
```
  
  

**After:**

  
```
URL: zap.stream/game-streams

Title: Live Game Streams

Page Heading: Game Streams
```
  

It could even get more robust by utilizing pre-configured tags. For example, some nomad travel websites will have hundreds of selectable tags such as “fast wifi”, “beach access”, “private space” etc… Builders can then combine these tags to show dynamically filtered results and modify page headings, titles and URLS to please the search engines. When someone searches for “a 3br villa in Phuket with fast wifi, beach access and private space”, they would land on a page that is closely tailored to this query via tags.

  

**Before:**

  
```
URL: nomadsite.com/thailand/phuket

Title: Nomad listings in Phuket

Page Heading: Nomad Listings in Phuket
```
  

**After:**

  
```
URL: nomadsite.com/thailand/phuket/villa-3br-fast-wifi-beach-access-private-space

Title: Three Bedroom Villas with Fast Wifi, Beach Access and Private Space in Phuket, Thailand

Page Heading: Three Bedroom Villas with Fast Wifi, Beach Access and Private Space in Phuket, Thailand
```
  

It may take some tinkering to get the titles and headings just right but it’s worth it.

  

The long phrases aka “longtail keywords” make up the vast majority of searches and programmatic SEO is well-suited to deliver precise results. The best part? The new client doesn’t need to have strong domain authority to rank for longtail terms. The longer the term, the less likely it’ll have strong competition.

  

### User-Generated Content SEO examples

  

Reusing our previous example of zap.stream, we have an input field for users to add tags to their videos. Since tags are not defined, they are considered user-generated. Here, the user can enter any type of tag.

  

As developers and designers, we can now create dynamic pages that are auto-generated from the tags.

  

**Before:**

  
```
URL: https://zap.stream/naddr1qq9rzd3c8qenzv34xgesygz47pzeqe60xey0fnwfmjxwxtdz52pqwnxskqs9jmhqx0gj6wz3s5psgqqqwenslj8h0y

Title: zap.stream

Page Heading: N/A

Tag useds: LoFi, 24/7, Radio
```
  

**After:**

  
```
URL 1: zap.stream/24-7

Title 1: 24/7 Live Streams

Page Heading 1: 24/7 Streams

{results}
```
  
```
URL 2: zap.stream/lofi

Title 2: Lofi Live Streams

Page Heading 2: LoFi Streams

{results}
```
  
```
URL 3: zap.stream/radio

Title 3: Live Radio Streams

Page Heading 3 : Live Radio Streams

{results}
```
  
:::tip

If we wanted to go the extra mile, we’d autosuggest the most popularly used tags as the user types them. This way if someone types lofi or lo-fi, they will use the same recommended tag that may be “LoFi”, avoiding the need for separate very closely titled pages which could be seen as spam.
