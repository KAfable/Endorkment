# Concepts

## Responsive Design Concepts

Before you just used to have one form factor with the desktop, however as computing devices have multiple form factors ranging from a mobile phone to tablet, back to desktop, or even up to ultrawide, those have to been taken into account when designing a UI for them.

- REM units

## Accessiblity Design Concepts

- some ideas were taken from this [Accessbility presentation by Rob Dodson](https://www.youtube.com/watch?v=z8xUCzToff8)

### Affordances

- if you have a button, you usually try to provide it visual affordances such as 3D view, or contrasting colors, if the person is vision impaired, they cannot rely on those traditional affordances
- screen readers cannot make use of the GUI, instead it'll travel over chrome's accessibility tree

### Design

- Colors: make sure that the contrast between
- Font Sizes: ???

### Semantic HTML

- HTML5 now has semantic elements that have more meaning such as `section` or `nav` instead of `div`
- use a select element instead of just a form
- `<h1>` over `<div>` with really big styling
- certain elements act as landmarks, such as `<h1>` to `<h6>` or `footer`
- Proper semantic HTML is the equivalent of having VIM macros to navigate the page
- Semantic HTML tags should try to convey intention of what the element is trying to do. On top of this, there also should some conformity as to how semantic HTML tags are used.
- Presentation HTML elements that aren't directly responsible for the content at hand, but instead styling. An example would be breaking up long form text into multiple `<p>` tags (this used to be done with `<div>`) to allow for different class styling.

### Accessible Components

- Bypass links: table of contents that let those with screenreaders jump to the correct area
- Accordions: Drop down menu that expands or contracts, progressively disclose portions of content to user
