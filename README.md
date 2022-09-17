# LABORATORY-AWS-SECRET-MANAGER

For reading the secret or either give "SecretsManagerReadWrite" policy

## Secret Manager

#### Create a IAM user with the right policies

Before even starting, we need to create a role with a custom trust policies with the following:

```json
{
  "Statement": [
    {
      "Action": ["secretsmanager:GetSecretValue"],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
```

#### Create secrets

Search for the `Secret Manager` in the AWS console and click on the button on the right `Store a new secret`.
Since I want to keep a key/value pair, I choose the `other type of secret`.

![./documentation/1.png](./documentation/1.png)

I enter a name for my secret and put if I want to a tag.

![./documentation/2.png](./documentation/2.png)

And that's all!

#### Code

#### Test

I can now see on my Postman the result of my call:

![./documentation/4.png](./documentation/4.png)

## Secret Rotation

![./documentation/5.png](./documentation/5.png)

## System Manager: Parameter Store

#### Create a IAM user with the right policies

Same as for Secret Manager, we need to create a custom role with the right policies for using the GetParameter function.
Pay attention to the Ressource or else it wont work.

```json
{
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["ssm:GetParameter"],
      "Resource": "arn:aws:ssm:*:xxxxxxxxxx:parameter/*"
    }
  ]
}
```

![./documentation/9.png](./documentation/9.png)
![./documentation/10.png](./documentation/10.png)
![./documentation/11.png](./documentation/11.png)

#### Create secrets

For creating a secret, it's quite simple. Search for `System Manager` and in the right menu, click on the `Parameter Store` submenu.
Once there, click on the `Create parameter` button in order to create a new secret.

![./documentation/7.png](./documentation/7.png)

It's a one window step, click on save and you should arrive at the same as this screenshot.

![./documentation/8.png](./documentation/8.png)

#### Code

#### Test

I can now see on my Postman the result of my call:

![./documentation/12.png](./documentation/12.png)
