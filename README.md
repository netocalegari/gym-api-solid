# APP

Gympass like app.

## RFs (Functional Requirements)

- [x] Must be able to register;
- [x] Must be able to authenticate;
- [x] Must be able to retrieve the logged-in user's profile;
- [x] Must be able to retrieve the number of check-ins made by the logged-in user;
- [x] Must be able to retrieve the user's check-in history;
- [x] Must be able to search for nearby gyms (up to 10km);
- [x] Must be able to search for gyms by name;
- [x] Must be able to check in at a gym;
- [x] Must be able to validate a user's check-in;
- [x] Must be able to register a gym;

## RNs (Business Rules)

- [x] Users cannot register with a duplicate email;
- [x] Users cannot check in more than once on the same day;
- [x] Users cannot check in if they are not within 100 meters of the gym;
- [x] Check-ins can only be validated up to 20 minutes after being created;
- [] Only administrators can validate check-ins;
- [] Only administrators can register a gym;

## RNFs (Non-Functional Requirements)

- [x] User passwords must be encrypted;
- [x] Application data must be stored in a PostgreSQL database;
- [x] All data lists must be paginated with 20 items per page;
- [] The user must be identified by a JWT;
