# APP

Gympass like app.

## RFs (Functional Requirements)

- [x] Must be able to register;
- [] Must be able to authenticate;
- [] Must be able to retrieve the logged-in user's profile;
- [] Must be able to retrieve the number of check-ins made by the logged-in user;
- [] Must be able to retrieve the user's check-in history;
- [] Must be able to search for nearby gyms;
- [] Must be able to search for gyms by name;
- [] Must be able to check in at a gym;
- [] Must be able to validate a user's check-in;
- [] Must be able to register a gym;

## RNs (Business Rules)

- [x] Users cannot register with a duplicate email;
- [] Users cannot check in more than once on the same day;
- [] Users cannot check in if they are not within 100 meters of the gym;
- [] Check-ins can only be validated up to 20 minutes after being created;
- [] Only administrators can validate check-ins;
- [] Only administrators can register a gym;

## RNFs (Non-Functional Requirements)

- [x] User passwords must be encrypted;
- [] Application data must be stored in a PostgreSQL database;
- [] All data lists must be paginated with 20 items per page;
- [] The user must be identified by a JWT;
