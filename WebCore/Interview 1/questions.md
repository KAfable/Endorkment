# Questions

## Change Styling on Webpage Element

**Question:** Was asked to go to any web page (chose Google.com) and asked to turn the button green and make its width 100% of the page.

**My answer:** Went to google.com (wary of not triggering any awkward search histories). Went into inspector and then inspected the search button. I tried to alter the styles in the second block which were the classes, instead of `element.style` in the first righthand block. I completely missed that, so I ended up altering the making both buttons green, and before I could fix it he corrected me on what I was doing. Then

**Conclusion:** Pretty embarassed that I bombed this one. I knew which selector to use, but it felt awkward that I had to go to a browser and change the elements immediately as they are rendered on there. He said that companies might ask you in real-time to display changes but I mean with React refreshing for styling, it's not like it's a big difference if I change it in my IDE versus inside Chrome's inspector.

## What do you know about Redux?

**My Answer:** Started off with Redux's implementation, though he was going to ask about. I mentioned how it was predicated on state being immutable, using a reducer function with conditional processing of dispatched actions and their payloads to alter global state. Then I thought to bring up Build Week 3, where I wrote state maangement for Redux and he just stopped me there.

**Conclusion:** The generic approach of the question kinda caught me off guard, probably would've done a lot better if I just simply replied with "its for advanced state management" and just let the awkward silence prompt him with another question. Probably failed this question since I dove right into implementation details(eg talking about the global state reducer function). It seemed like he was fishing/angling for a specific answer but I wasn't sure what the intention he was aiming at. It definitely started to feel like it was veering off the conversational style promised and just checking off boxes.

## Can we create apps without Redux?

**My Answer:**Yeah, people have done it for years

## Why do we need complexity and extra layer with Redux?

**My Answer:** It helps organize the code.

**Conclusion:** Missed another softball here, bit embarassed about it again. I guess this question and the previous question were both aimed towards getting me to say 'Redux is used to help manage the complexity in apps as they grow bigger'. So overall missed the forest for the trees, and I just gave that generic answer because I wasn't sure exactly what he was aiming for.

## What is the difference Between a POST and GET Request

**My Answer:** A GET basically just gets data in the response and a POST sends data within the body of the request and the backend will do something with that information. The POST will send back an affirmation, usually like a 200 response.

**Conclusion:** Due to the way I worded it, he clarified to me that all requests can send back 200's regardless of POST/GET, which made me come off as thinking that GET requests don't have response codes either. I think if I just answered with 'GET gets things, and POST sends things' and once again leave the it to silence to prompt with another question, I would've came off better.

## Can I use POST to retrieve data? If yes, why would I ever use POST to retrieve data?

**Answer(verbatim):** So now I'm afraid of going into implementation details because you just told me to not go into implementation details unless prompted, but an example of this would how GraphQL handles all requests. It only uses POST requests for its queries and mutations since it relies on the body of the request to get the specific data it needs without the use of endpoints.

**Answer 2(see below):** 2nd attempt I said that you would use a POST if you need to get information that requires the use of a body/header (didn't give an example, was trying to recover from interruption).

**Conclusion:** He interrupted me in the middle of the GraphQL example, so I knew I was on the wrong track right off the bat. He re-iterated the question again and in my next answer I kinda tried to waffle about, not really sure what kind of answer he was looking for. Either way, the example he gave me was using POST as a login to then get to protected views on the client, turns out it was really simple, feel bad for missing another simple question again. Also he added that GET has a max limit in the request, where a POST does not (TIL).

## How do you know it is secure connection?

**Answer:** HTTPS

**Conclusion:** Just want to clarify that he added a lot of context this time around (eg. giving an example of protecting against someone using a sniffer) to this question, even though it seemed like it was just another fact checking question, I felt like at this point since I didn't do well on the previous questions on difference between a POST/GET, he was giving extra context to the question so I could hit a soft ball.

## Okay, we logged in, hit the backend, what do you return to me as the user?

**Answer:** Can I go into implementation details now? Assuming that the user logs into the average app, they would get back the stateful information, such as any relevant views.

**Answer 2:** JWT, or a cookie depending on the implementation for sessions in the backend

**Conclusion:** Yeah this one was definitely wrong initially on my part. I should have said that the backend sends the relevant JWT/cookie, and from there it's used to help get information on any redirects. He re-clarified the question this time asking what gets returned to the user that to make sure that I stay logged in, and that gave me the hint that it was probably something more generic and related to authentication.

## What information should this token have to guarantee that this user is secure?

**Answer:** The most relevant ones I can think of are claims, which are baked into the JWT. Another part would be the UID/unique identifier, and the subject.

**Conclusion:** I got called out for not mentioning the expiry date for session tracking tools. I guess this is the part where I got burned due to my Labs behavior since when we were configuring JWT's, we kept getting annoyed that the tokens kept refreshing, so we just gave them a 24hr expiry. Expiry on JWTs/cookies was an afterthought, and I never really considered them that important (more of an annoyance really), so I did learn from that.

As for my answer, I went deep into the implementation of a JWT, specifically talking about the anatomy of it, when I guess all he was looking for was unique identfier, authorization, and expiry date.

## We are designing a Zoo, can you describe the table's well need and the relationships between those tables?

**Answer:** Yeah sure, so we can start off with the animals table. _after fumbling about trying to explain possible fields on the animals table_ and also you'll probably have another table that could track where the animal came from, or the history of the animal. Next you'd probably also want another table for the staff, and I guess most of them would have a one to many, but it could easily be a many-to-many relationship between the staff and animals, since a janitor could clean multiple animal pens, and one animal can have a janitor, or a vet.

**Conclusion:** Two things, first my mind went back to when we had this exact same lecture with Luis where he used the Zoo animals as an example of how to create a schema. It was also the first introduction to junction tables so I kept thinking about keeping track of the history of an animal, when I should've really just kept it simple, which is why I had that out of place answer on having a junction table for the many to many relationship between Zoo's and Animals.

Feel kinda dumb for missing out on visitors, since that is the main revenue source for a zoo, I think I just tunnel visioned and haven't really designed a schema in a while. I stumbled a lot on this question when in reality it was just 2 tables, which didn't end up looking very convincing, maybe I was trying too hard to find a complex answer that wasn't there.

## How would you get all Zoo animals, that are maintained by staff with an id of 2?

**Answer:** `SELECT * ALL FROM ANIMALS WHERE staff_id = 2`

**Conclusion:** Yeah I messed this one up pretty bad several ways, I was too used to using junction tables instead of a JOIN . I guess my SQL was too rusty, and haven't done any review in a while especially since I always relied on an ORM like Knex / Django. The key was to recognize that you have a joined table since it is a many to many relationship, however from there you JOIN on to the respective animal/staff tables.

**Correct Answer:**

```SQL
  SELECT staff_name, animal_name
  from assignments AS a
  JOIN staff ON a.staff = staff_name
  JOIN animals ON a.animal_id = animal_name
  WHERE a.staff_id = 2
```

assignments is a junction table between staff and animals that keeps track of the relationships, and has two foreign keys pointing back to the `staff` and `animal` tables respectively.

## Are you familiar with JOIN?

**Answer:** _sad JS-ORM noises_

**Conclusion:** Long story short, since I botched up the previous question, I tried to word it in a way that wasn't embarassing, but it didn't work out.

## What about LEFTJOIN or RIGHTJOIN?

**Answer:** No clue.

**Conclusion:** Same as above.
