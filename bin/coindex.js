#!/usr/bin/env node
const program = require("commander");
const pkg = require("../package.json");

program
  .version(pkg.version)
  .command("key", "Manager API Key -- https://nomics.com")
  .command("check", "Check Coin Price")
  .parse(process.argv);
