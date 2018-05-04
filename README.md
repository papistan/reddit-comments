

# reddit-like challenge

Given the following data, build a Reddit-like comment structure using React. Upvote/Downvote features must be working (just for demo purposes, no backend, persistence layer or anything extra required).

The component should receive 4 props:

- `data`: `PropTypes.array`
- `users`: `PropTypes.array`
- `onUpvote`: `PropTypes.func`
- `onDownvote`: `PropTypes.func`

Please handle the `onUpvote` and `onDownvote` on a root component and update the `data` for demo purposes. There is no need to create or delete new comments. No text editing required.

Use the React boilerplate/starter-project that fits better this situation and try avoid unnecessary extra dependencies.

The `data` structure can have infinitely nested comments.
Focus on performance, maintainability and lastly visuals. But make sure to have a consistent positioning structure similar to Reddit.

> Reference: http://blogs.discovermagazine.com/seriouslyscience/files/2016/11/5373996658_c656fabe0e_z.jpg
