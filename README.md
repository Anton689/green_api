# Chat with green api

## Short description

This is a simple chat application with a user-friendly interface for sending and receiving messages through WhatsApp using the [green api](https://green-api.com). The client communicates with the server through HTTP requests. To retrieve messages, a request needs to be made. More details about the API's functionality can be found at the following link: [green doc](https://green-api.com/docs/api/).

To get started with the application, you need to follow the [green account](https://green-api.com/docs/before-start/#cabinet), register, and obtain a token and instance.

## View

1) log in
<img width="1800" alt="screen1" src="https://github.com/Anton689/green_api/assets/91281363/2b460dce-fcdf-474b-b27a-f238fcb8060c">

2) main view
<img width="1787" alt="screen2" src="https://github.com/Anton689/green_api/assets/91281363/e29eba1f-3a1e-4b5c-bdc8-4efde0eb9ab5">

3) add contact
<img width="1779" alt="screen3" src="https://github.com/Anton689/green_api/assets/91281363/abc9abb3-905b-4c54-9b53-408e7c29c27b">

4) chat view
<img width="1796" alt="screen4" src="https://github.com/Anton689/green_api/assets/91281363/9c42874f-55bc-489f-a148-a2c49961b081">

5) message
<img width="1775" alt="screen5" src="https://github.com/Anton689/green_api/assets/91281363/69febda8-6cd8-4a09-af7f-55d0e45ea0fa">

## Incoming messages info

You can receive incoming messages through HTTP API requests similar to how other methods of the Green API are implemented. It is guaranteed that the notifications will be delivered in chronological order in the same sequence they were received, following the FIFO (First-In, First-Out) principle. All incoming notifications are stored in a queue and await retrieval for up to 24 hours.

If you want to get incoming message from your contact - click "Receive" button.

More details [here](https://green-api.com/docs/api/receiving/technology-http-api/)




## Available Scripts

In the project directory, you can run:

### `yarn install`

### `yarn start`

## Tools

Typescript, React, Redux toolkit, Redux thunk, Axios.
