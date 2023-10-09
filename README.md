# Members Only Client

Live link: https://members-only-client.vercel.app/

![Model](https://github.com/Barrymoonshine/members-only-client/blob/main/public/images/club-land-screenshot.png?raw=true)

## Summary

ClubLand is an exclusive club house in which anyone can view posts, but only logged in users can create posts. To see who created the posts users must answer a riddle to qualify for membership status (answer: friend), and all users can sign up for admin permissions to delete posts.

This app was built using TypeScript and React and is the client for the server which was also built as part of this project, and can be found [here](https://github.com/Barrymoonshine/members-only).

Hosted and deployed on Vercel.

## Features

- Create and delete messages
- Dynamic welcome message
- Pop up log in form
- Manage authorisation permissions by answering a riddle, or updating account details on the My Account page

## Key skills employed

- Static type checking with TypeScript with global and local state management and global data types specified in dedicated types directory
- Local type checking such as prop and form type checking completed on component/page for simplicity
- Utilised 'union' types where multiple types may be present for each variable or function parameter
- Packaged up action types into one type export using 'union' types to improve code readability
- Clarified `payload` types using the `never` keyword and the optional modifier `?` where the `payload` property may not be present
- Type guarding within a conditional blocks to ensure that require properties are present prior to access
- Error handling with the `as` keyword to explicitly specify the server error types where TypeScript can't infer
