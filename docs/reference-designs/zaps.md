# Zaps
:::tip Resource
All of the designs on this page can be found in the [Reference Designs Figma File](https://www.figma.com/file/C2ztFLDxihrfturW7Q6kbj/Reference-Components?type=design&node-id=213%3A11495&mode=design&t=qbn9PiAj1v6RWRwM-1). Feel free to make a copy and use however you wish. This resource is open source without any limitations.
:::

Zaps are the magic of nostr. With zaps, users can exchange value instantly. In this section we will highlight some common places for zaps and provide some example components of how to display zaps and their relevant views. If you have any unique design use cases for your specific client, please don't hestiate to reach out.

### Music Player Bar

<img src={require('@site/static/img/zaps/zaps1.png').default} />
<figure>
<figcaption>Music player UI. Listeners can zap the artist right from the play overlay. Here we are also combining zaps with "streaming" which is basically a periodic automated zap. </figcaption>
</figure>


### Streaming Modal Settings

<img src={require('@site/static/img/zaps/zaps2.png').default} />
<figure>
<figcaption>Mock streaming configuration modal. Here, the user specifies the streaming per minute amount. In reality, this would probably be implemented with automated zaps that trigger every x number of seconds.  </figcaption>
</figure>


### Soundtrack Slideout Info

<img src={require('@site/static/img/zaps/zaps3.png').default} />
<figure>
<figcaption>Soundtrack details panel on desktop. This screen would slide out from the right when people click on track thumbnail. From here, people can zap the track or zap comments. </figcaption>
</figure>


### Music Playlists
<img src={require('@site/static/img/zaps/zaps4.png').default} />

### Mobile App Zap Type Selection
<img src={require('@site/static/img/zaps/zaps5.png').default} />

### Mobile Zap Amount Selection
<img src={require('@site/static/img/zaps/zaps6.png').default} />

### Desktop Zap Modal (Unselected)
If user sets a default zap amount, the UI could reflect this by automatically selecing their default zap. This way they only need to click once to zap the user.
<img src={require('@site/static/img/zaps/zaps7.png').default} />

### Desktop Zap Modal (Already Zapped)

<img src={require('@site/static/img/zaps/zaps4.png').default} />

## iOS Zap Type Selection
<img src={require('@site/static/img/zaps/zaps5.png').default} />

## Mobile App Zap Amount Selection
By default, we should select the lowest amount for the user (not pictured) so they can zap with one tap. If they want to change the amount, they can tap other options.
<img src={require('@site/static/img/zaps/zaps6.png').default} />

## Desktop Zap Modal Variation
The image below is a modal with content behind it (not pictured). 
<img src={require('@site/static/img/zaps/zaps8.png').default} />