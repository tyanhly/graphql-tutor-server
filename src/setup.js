import {User, Post} from './factories/Db';
import _ from 'lodash';
import Faker from 'faker';

// Create table
User.sync();
Post.sync();

// Init data
_.times(10, () =>{
    // Table created
    return User.create({
        firstName: Faker.name.firstName(),
        lastName: Faker.name.lastName(),
        email: Faker.internet.email()
    }).then(user => {
        return user.createPost({
            title: `Post of user firstname: ${user.firstName}`,
            content: `This is content`
        });
    });


});

