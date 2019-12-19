# Test Social project
Test project to simulate a social website (client and server side).
1. Run the server
2. Run the client
3. API calls are automatic from the client
4. Access the client page

## Server
- Content are saved within the `server/` directory.
- The server is based on [**Node Express 4**](https://expressjs.com/)
- [Cmder](https://cmder.net/) is recommended to view logs.
- **Run server**
  - dev environment: `yarn ds` _(yarn devServer)_
  - production: _not configured yet_

## Client
- React content are saved within the `client/src/` directory.
- Client application is based on [**Bootstrap**](https://react-bootstrap.github.io/components/alerts/)
- **Run client**
  - dev environment: `yarn dc` _(yarn devClient)_
  - production: _not configured yet_

## Useful commands
- `yarn dc` _(yarn devClient)_ runs the client under dev environment (dev server must run for full functionality)
- `yarn ds` _(yarn devServer)_ runs the server under dev environment
- `yarn code` makes sure the code is pretty, passes Lint validation and passes UnitTests
- `yarn test`, `yarn testCi`, `yarn testWatch` are useful for UnitTest
