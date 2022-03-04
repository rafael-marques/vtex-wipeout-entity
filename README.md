### VTEX WIPEOUT ENTITY

## This is a NodeJS app to delete all data in a specific entity. Use carefully.

### Deleting data is **irreverssible**. Backup your entity first and make sure you are using the correct entity acronym.

> PROCEED AT YOUR OWN RISK

---

## How it works?

 - Clone this repository
 - Run `yarn install`
 - Rename the `.env.example` to `.env` . You can use `mv .env.example .env`
 - Fill the environment variables with the account name, acronym and the token (run `vtex local token` logged on the desired VTEX account to get the token)
 - run `node index.js`


Want to help improve this app, you are more than welcome :)
 - I noticed a small issue that sometimes you need to run the `node index.js` more than once due the execution time that I didn't fix since this was developed in a rush moment, so fell free to send your pull request