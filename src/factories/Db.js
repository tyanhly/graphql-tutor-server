import Sequelize from 'sequelize';
import * as constants from '../constants/Db';

const Db = {
    _instance: null,
    get instance(){
        if(!this._instance){
            const sequelize = new Sequelize(constants.DB_NAME, constants.DB_USER, constants.DB_PASS, {
                host: constants.DB_HOST,
                dialect: constants.DB_DIALECT,
                operatorsAliases: false,

                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                }
            });
            sequelize
                .authenticate()
                .then(() => {
                    console.log('Connection has been established successfully.');
                })
                .catch(err => {
                    console.error('Unable to connect to the database:', err);
                });
            this._instance = sequelize;
        }

        return this._instance;
    }
};

/**
 * User definition
 */
export const User = Db.instance.define('user', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            // isEmail: true
        }
    }
}, {freezeTableName: true});

/**
 * Post definition
 */
export const Post = Db.instance.define('post', {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {freezeTableName: true});


User.hasMany(Post);
Post.belongsTo(User);



export default Db;