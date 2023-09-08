---
sidebar_position: 7
---

# Open Graph Data

Open Graph (OG) tags communicate information that allows people to preview the link before clicking it. 

:::tip 
[Open Graph Data Generator](https://www.opengraph.xyz/) - use this to generate the necessary template and update the static values with your dynamic variables.
::: 

OG data includes:

- Title
- Description
- (Optional) Image
- URL Preview

Without this information, or if not implemented by the client, most links will render with a default title which may not be indicative of the content being linked.

```
Snort.social 
```

With OG tags in place, social clients may generate nicer previews, and other non-nostr app links will be more enticing to click:

```
Edward Snowden - Snort
Bio: I used to work for the government. Now I work for the public. Author, "Permanent Record": https://us.macmillan.com/books/9781250237231/permanentrecord
Banner Image (or dynamically generated image)
```

## Dynamic Open Graph Images
To take things even further and make more actionable social graph images, savvy developers can utilize various techniques to dynamically generate OG images. The technical aspects are beyond the scope of this guide, but you may find various tutorials if you search for “dynamic open graph images” ([example 1](https://urre.me/writings/dynamic-open-graph-images/), [example 2)](https://www.netlify.com/blog/dynamically-generate-open-graph-image-variants/)
