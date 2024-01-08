# Sign In / Sign Up Screens

## Logging in with Extensions

The topic of how the user should log in to a new client is still an ongoing discussion in the nostr community. Some argue that the user should never enter their nsec into an input field at the risk of being compromised by the service. The alternative to nsec login is to use an extension such as Alby or Nos2x

Given the nature of nostr, users cannot recover from a leaked private key and must take greater precaution than they would with a username/password combination. There are no resets in nostr. Therefore, it is entirely reasonable to push for a standard where extensions are used instead. 

However,  extensions come with their own potentially major downsides:

Asking the user to leave the onboarding flow to sign up for some other app is a significant point of potential drop off for many would-be users. The additional time requirement and or the UX of an extension setup could result in users leaving. 
Some less technical users may not understand how extension signing works or how it interacts with the nostr protocol. 
The exhaustive permission warnings on extensions like Alby could create even further confusion even if the user has already signed up with Alby and installed the Chrome extension. 

Given this complexity, the current consensus leans on eliminating nsec inputs and asking the user to log in with an extension. However, some clients disregard and offer an nsec input regardless. 

Please check back often to see how the community opinion changes over time and to see what becomes the commonly accepted practice as we have more time to consider various trade-offs. 

### Current Approach to Login

The most commonly accepted method for logging in is to use a Nostr extension or to create a new account. Some clients still allow users to input an nsec (private key), but the current consensus seems to view this practice negatively due to potential leaks.

<img src={require('@site/static/img/login-flow.png').default} />
