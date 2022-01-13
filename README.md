# sprout
Super opinionated web app bootstrapper

## Summary
- API
- Frontend
- Bots
- TurboRepo
- Auth
- Docker
- CICD
- Google Cloud
- Setup AND DEPLOY in single script

## API
- NodeJS
- TypeScript
- NestJS
- Basic Auth Guards
- User Auth Routes
- User Profile Routes
- Docker
- Google Cloud Build
- Google Firebase Auth
- Google Firestore DB
- Google PubSub
- Logging

## Front
- VueJS
- Vuex
- TypeScript
- Tailwind
- Auth flows (sign in, sign out, sign up, forgot password, reset password, federated auth)
- Authenticated Dashboard
- User profile management
- Docker
- Google Cloud Build
- Google Firebase Auth
- Google Analytics

## Bots
- NodeJS
- TypeScript
- `npm bamboo sprout bot` script
- Docker
- Google Cloud Build

## Process
- `npm bamboo sprout web MyNewApp`
- check GCP credentials, requesting if not current
- create GCP project
- enable GCP Firestore
- enable GCP PubSub
- create Firebase auth project for dev
- create TurboRepo monorepo
- commit
- create API project
- commit
- create Front project
- commit
- create Bots directory
- create dummy Bot
- commit
- push
- deploy all

## Future Features
- Slack integration
- create prod environment
- use Terraform or similar for cloud infrastructure?
- support more cloud providers
- support scheduling bots
- support multi-environment deployments
- mobile app PWA wrapper
- more federated auth providers
