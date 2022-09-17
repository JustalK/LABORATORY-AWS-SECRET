# LABORATORY-AWS-SECRET-MANAGER

For reading the secret or either give "SecretsManagerReadWrite" policy

## Secret Manager

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

![./documentation/1.png](./documentation/1.png)
![./documentation/2.png](./documentation/2.png)
![./documentation/3.png](./documentation/3.png)
![./documentation/4.png](./documentation/4.png)
![./documentation/5.png](./documentation/5.png)

## System Manager: Parameter Store

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

![./documentation/7.png](./documentation/7.png)
![./documentation/8.png](./documentation/8.png)
![./documentation/9.png](./documentation/9.png)
![./documentation/10.png](./documentation/10.png)
![./documentation/11.png](./documentation/11.png)
![./documentation/12.png](./documentation/12.png)
