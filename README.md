# Nest.js EWX Worker Node Challenge

<p align="center">
  <a href="https://www.energyweb.org" target="blank"><img src="EW.png" width="120" alt="Energy Web Foundation Logo" /></a>
</p>

## Introduction

Hello! Welcome to Energy Web's Typescript and [Nest.js](https://github.com/nestjs/nest) challenge.
The objective of the challenge is to assess fundamental proficiency in Nest.js and Typescript (or possibly the ability to quickly learn the technology it is new to you).

The challenge scenario is based off of the EWX Worker Node use case.
This [blog post](https://medium.com/energy-web-insights/energy-web-releases-energy-web-x-lightpaper-and-technology-roadmap-cc7aa4af1b38) has more information about EWX.
In this challenge, you will implement EWX features in an HTTP API.

The challenge is intended to be a test of fundamental abilities and should be completed in under 2 hours.

## Instructions

Please refer to the following instructions in order to complete the challenge.

### Installation
First, install the required node.js version.

nvm is recommended. To install and activate required version with nvm, execute:

```shell
nvm install
```

After having required version already required execute:

```shell
nvm use # you need to execute this in every terminal used for this project
```

After having installed the correct node version, to install the required package execute:

```shell
$ npm install
```

### Task Requirements

The task is to implement 3 HTTP endpoints.
The expected behaviour of these endpoints is:
1. The `/vote` endpoint should be `POST` endpoint and should accept a body with the `Vote` type 
2. The `/rewarded-accounts` endpoint should return an array of account IDs whose vote was a part of the consensus set of votes are are eligible for rewards, based on the data submitted to the `/vote` endpoint. If consensus has not been reached, an empty array should be return.
3. The `/rewarded-accounts/:accountId` endpoint should return an `{ isRewarded: true }` object if the provided `accountId` is a part of the consensus set. It should return `{ isRewarded: false }` otherwise.
4. The consensus logic should be that the first `vote` `value` to receive a count greater than `CONSENSUS_THRESHOLD` is the consensus `value`.

If you have any questions about the above behaviour, please reach out to ask.

**Note**
- Data storage may be entirely in memory. The is not need to configure a database to persist data between requests.
- Please consider the time and space complexity of your implementation if a large number of votes are submitted.

### Validating your Implementation

The easiest value to validate your implementation is to use automated tests.
An initial end-to-end test is provided and can be run using

```shell
$ npm run test:e2e
```

Please feel free to additional automated tests, either unit or end-to-end.

To run the app to test your implementation manually, you may use:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

### Submission

Please make a clone of this repository and send us either a link to your cloned repository on GitHub or a zipped copy of the cloned repository.
