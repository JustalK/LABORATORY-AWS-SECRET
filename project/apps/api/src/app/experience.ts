/**
 * The endpoint of the express app
 * @module routes/app
 */
export {};
('use strict');

const express = require('express');
const AWS = require('aws-sdk');
const router = express.Router();

const client = new AWS.SecretsManager({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

router.get('/health', (req, res) => {
  res.send({ status: 'working' });
});

router.get('/secret', async (req, res) => {
  let secret;
  try {
    const data = await client
      .getSecretValue({ SecretId: process.env.SECRET_ID })
      .promise();
    if (data.SecretString) secret = data.SecretString;
    res.send(secret ? JSON.parse(secret) : secret);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
