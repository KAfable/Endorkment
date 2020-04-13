# Practice/Demonstration Questions

## Accessibility

1. What are some things that we can do to make things more accessible?

## Security

1. Show me how you handled client-side authentication (axiosWithAuth, PrivateRoute, Storing JWT's)
2. What are some ways you can do client side authentication?
   You can use a cookie instead of a JWT in session/local storage.
3. What is the difference between session/local storage?

## Front-End

1. Can you show me an implementation of Routes in React Router?
2. What is the `exact` keyword in React Routes?
3. Can you show me where you made an API call in the Frontend and what you did with the data you received?
4. Show me a form you made with validation and error-handling.

## SQL

1. If you were designing a database for a Zoo, what kind of tables would you use?
2. Can you explain what a `JOIN` is in SQL?
3. Can you write a query that gets all of the animals that are taken care of by staff with ID 2?

   Depends on the relationship, if it's a many-to-many relationship, you can just query the junction table. The following query uses a JOIN as well to get the staff full name associated with the animal. It also assumes that the `animal_name` is the identifier for the animal instead of an id.

   ```sql
   SELECT animal_name, staff.first_name, staff.last_name WHERE staff_id = 2 FROM animal_staff JOIN ON animal_staff.staff_id = staff.sid
   ```

## Back-end

1. Can you explain to me middleware and how you are using it and why you need it?
2. Can you show me some middleware you have written?
3. Can you show me where the JWT is being authenticated in the backend?
