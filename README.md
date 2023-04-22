To deploy the back-end, run this command:

Prod:

sam deploy --template-file prod.yaml --stack-name proxximos-backend-api-prod --capabilities CAPABILITY_NAMED_IAM --no-confirm-changeset --resolve-s3 --no-fail-on-empty-changeset --region eu-west-2 --profile dominique

Staging:

sam deploy --template-file staging.yaml --stack-name proxximos-backend-api-staging --capabilities CAPABILITY_NAMED_IAM --no-confirm-changeset --resolve-s3 --no-fail-on-empty-changeset --region eu-west-2 --profile dominique

Canary:

sam deploy --template-file canary.yaml --stack-name proxximos-backend-api-canary --capabilities CAPABILITY_NAMED_IAM --no-confirm-changeset --resolve-s3 --no-fail-on-empty-changeset --region eu-west-2 --profile dominique
