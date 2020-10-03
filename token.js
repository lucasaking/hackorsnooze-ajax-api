{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxKIiwiaWF0IjoxNjAxNTcxODc4fQ.Va4g4cRQ1pZULL74I-I2t5CJ2fO39bePOvNqHneHi1E", "user": { "createdAt": "2020-10-01T17:04:38.843Z", "favorites": [], "name": "Lucas Jonathan", "stories": [], "updatedAt": "2020-10-01T17:04:38.843Z", "username": "LJ" } }

curl - i \
-H "Content-Type: application/json" \
-X POST \
-d '{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxKIiwiaWF0IjoxNjAxNTcxODc4fQ.Va4g4cRQ1pZULL74I-I2t5CJ2fO39bePOvNqHneHi1E", "story": {"author":"Elie Schoppik","title":"Four Tips for Moving Faster as a Developer", "url": "https://www.rithmschool.com/blog/developer-productivity"} }' \
https://hack-or-snooze-v3.herokuapp.com/stories


curl - i \
-H "Content-Type: application/json" \
-X POST \
-d '{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxKIiwiaWF0IjoxNjAxNTcxODc4fQ.Va4g4cRQ1pZULL74I-I2t5CJ2fO39bePOvNqHneHi1E", "story": {"author":"Elie Schoppik","title":"Four Tips for Moving Faster as a Developer", "url": "https://www.rithmschool.com/blog/developer-productivity"} }' \
https://hack-or-snooze-v3.herokuapp.com/stories


JSON Format


//insomnia request JSON syntax
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxKIiwiaWF0IjoxNjAxNTcxODc4fQ.Va4g4cRQ1pZULL74I-I2t5CJ2fO39bePOvNqHneHi1E",
    "story": { "title": "firstpost", "author": "googly", "url": "https://www.google.com/" }
}