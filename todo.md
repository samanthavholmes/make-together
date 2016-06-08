# Todos

## Layout
- footer should be longer
- more data in the footer (copyright, 1 sentence why we made it, something like that)
- take away colors from footer text

## Site Index
- arrow to scroll down is in the wrong location
- navbar not colored with image--can we get the images under the navbar as before?
- when user first signs in, the rest of the welcome page beneath the images doesn't render

## User profile
- new skill form should be bootstrapped

## Followers/Following
- followers/following page should have the user's name on top
- if no followers or no following, should have a message with that
- if current user == @user AND current user isn't following anyone, should suggest 2 people to follow (that would involve adding a helper method)
- following and followed should have a number on them (how many per)
- follower/following should be rendered in two columns like the user index page

## Inbox
- should be boxed in a way that makes it understandable which part of the page serves which function
- messages should not have that odd line on the bottom
- 'inbox' box should follow same design as our other pages

## Favorites
- figure out why there's the disalignment

## Project show page
- Bring header up to match photo
- if no tags, tags box shouldn't show up
- tags box should show up above description box
- heart, report, posted, expiring dates should be in a box on the right (like with user show)
- back to projects link should be taken down
- image should be a bigger part of the page

## Auxiliary pages
- review Readme as a group to brainstorm any additions
- community.md, hire.md: check your personal entry and update it

# After presentation, upcoming features:
- test out all aspects of the app with RSpec, Capybara, etc
- backend-wide refactoring
- Infinite scroll on projects (load 10 at a time)
- blocking features
- administrator features (contact us, etc) - as a separate migration
- being able to upload images for projects and users
- discussion areas like groups?
- mailer hookups: email confirmation, password changes, notifications
- user portfolio page: projects that have expired, projects from Dribbble and Github
- ability to comment on projects publicly before/without messaging user
- posting blog posts by administrators, talking about various things about the app