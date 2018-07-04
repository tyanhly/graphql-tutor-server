# About

Grapql tutor - server side

# Setup

```
# Config database: 
src/constants/Db.js

# Install packages
yarn install

# Init setup
yarn run setup

# Start server
yarn run start
```

# Query
```
# List
{
  getUsers(limit: 2){
    id,
    email,
    firstName,
    posts{
			content,
      title
    }
  }
}

# Find
{
  getUser(id: 2){
    id,
    email,
    firstName,
    posts{
			content,
      title
    }
  }
}

#Insert
mutation {
  createUser(userInput: {
    lastName: "Nash",
    firstName: "John",
    email: "john.nash@gmail.com"
    posts: [ 
      {
        title: "hello1",
        content: "hello content1"
    	},
      {
        title: "hello2",
        content: "hello content2"
    	},
      {
        title: "hello3",
        content: "hello content3"
    }]
  }) {
    id,
    lastName,
    firstName,
    email,
    posts{
      title,
      content
    }
  }
}

mutation {
  createPost(createPostInput: {
    title: "this is post of user1",
    content: "this is post of user1's content",
    userId: 1
  }){
    title,
    content,
    id
  }
}

#Update
mutation {
  updateUser(id: 1, updateUserInput: {
    lastName: "Nash",
    firstName: "John",
  }) {
    id,
    lastName,
    firstName,
    email,
    posts{
      title,
      content
    }
  }
}


mutation {
  updatePost(id: 30, updatePostInput: {
    title: "update title user 30",
    content: "update content user 30"
  }){
    title,
    content,
    id
  }
}
```