conFusionServer
Coursera, Server-side Development with NodeJS, Express and MongoDB

requirements
initializa node_modules with express-generator:

npm install express-generator@4.16.0 -g

mongo database is required:

mongod --dbpath=/path/to/data --bind_ip 127.0.0.1

npm install mongodb@3.0.10 --save

npm install mongoose@5.1.7 --save

other node modules:

npm install assert@1.4.1 --save

npm install mongoose-currency@0.2.0 --save

npm install cookie-parser@1.4.3 --save

npm install express-session@1.15.6 session-file-store@1.2.0 --save

npm install passport@0.4.0 passport-local@1.0.0 passport-local-mongoose@5.0.1 --save

npm install passport-jwt@4.0.0 jsonwebtoken@8.3.0 --save

REST API endpoints:
https://localhost:3000/users

https://localhost:3000/users/signup

https://localhost:3000/users/login

https://localhost:3000/users/signout

https://localhost:3000/dishes/

https://localhost:3000/dishes/:dishId

https://localhost:3000/dishes/:dishId/comments/

https://localhost:3000/dishes/:dishId/comments/:commentId

https://localhost:3000/promotions/

https://localhost:3000/promotions/:promotionId

https://localhost:3000/leaders/

https://localhost:3000/leaders/:leaderId

Control access:
Only Admin can POST, PUT and DELETE

Users can GET, PUT and DELETE their own comments only
