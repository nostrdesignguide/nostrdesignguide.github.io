# Error Handling
Apps are bound to have errors. We can help people avoid the stress of errors by designing in ways that prevent errors from happening in the first place and lessen the impact of the error once it occurs. The following are some good practices when it comes to error handling.

## Prevent Errors
One of the best ways to handle errors is to prevent them from happening in the first place. Here are some ways to prevent errors:
- If the UI is not obvious, provide instructions, hints and tooltips on how to handle whatever it is the user is trying to do.
- Use clear, concise, unambiguous labels. Avoid jargon and technical terms.
- Provide short input tooltips to explain what the input is for and what format it should be in. For example, with file uploader limits, use a tooltip to explain the file size limit and what file types are allowed, instead of waiting for users to upload a file that's too large and in the wrong format.
- Provide short explanations of what the user is about to do and what the consequences are.
- Use progressive disclosure to hide advanced features and settings from the user until they are ready to use them. The fewer interactions the user has to choose from, the less likely they are to make a mistake.
- Practice intuitive design patterns that users are already familiar with. For example, if you have a list of items, use a list view instead of a grid view. If you have a list of items that can be sorted, use a dropdown menu to select the sort order instead of a button that toggles the sort order. The same goes for icons. If you have a button that deletes something, use a trash can icon. If the button is not a common action that most people would be familiar with, pair it with labels. 

## Inform when errors occur

It should be obvious, but I've seen clients not inform users when an error has occured. It just sort of fails silently and the user is left wondering what happened. The obvious solution here is to show an error message. Toast notifications or in-context messages are equally effective. 

<img src={require('@site/static/img/how-to/toast-error.png').default} />

## Explain what went wrong
Use plain language to explain what went wrong. It's easy to fall back on a full dump of raw JSON which may be helpful to developers, but to the average user it won't make sense and will only make the website look broken. Here is an example of friendlier error handling:

<img src={require('@site/static/img/how-to/better-eh.png').default} />

## Provide a way to recover from errors

Allow users to recover from errors by peforming some action. Here is a good example from Lume that guides users to restart the app and report the error to developers. It feels great knowing someone actually cares about your error because they took the time to add a mechanism to report it.

<img src={require('@site/static/img/how-to/lume-error-handling.png').default} />



