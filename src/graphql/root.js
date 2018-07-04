
import {User, Post} from '../factories/Db';
import _ from 'lodash';

const root = {

    getUsers: ({limit}) => {
        return User.findAll({
            limit,
            include: [{
                model: Post
            }]
        });
    },

    getUser: ({id}) => {
        return User.findById(id);
    },

    createUser: ({createUserInput}) => {
        return User.create(createPostInput).then(user => {
            let posts =[];
            _.times(createPostInput.posts.length, i => {
                posts[i] = user.createPost(createPostInput.posts[i]).then((post) => {
                    return post;
                })
            });
            user.posts = posts;
            return user;
        });
    },

    updateUser: ({id, updateUserInput}) => {
        return User.findById(id, { include: [{model: Post}]}).then(user => {
            return user.update(updateUserInput).then(user => {
                return user;
            });
        });
    },

    createPost: ({createPostInput}) => {
        return Post.create(createPostInput).then(post => {
            return post;
        });
    },

    updatePost: ({id, updatePostInput}) => {
        return Post.findById(id).then(post => {
            return post.update(updatePostInput).then(post => {
                return post;
            });
        });
    }
}

export default root;