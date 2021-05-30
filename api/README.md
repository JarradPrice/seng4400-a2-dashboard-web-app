# Azure Functions API

Contains three functions:
- messages-get: [GET] /api/messages
- messages-post: [POST] /api/messages
- messages-delete [POST] /api/clear

### messages-get
Returns messages object.

### messages-post
Adds new message to messages object. Requires auth key to be passed.

### messages-delete
Deletes stored messages in messages object.