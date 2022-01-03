//2. Write the schema of your database that is going to store the data. We want to
//see this in detail to see where the all the different information will be stored.
import mongoose from 'mongoose'

//schema for storing tweets
const tweetSchema = mongoose.Schema({
    tweet: {type: String, maxLength: 140}
})

const Tweets = mongoose.model("Tweets", tweetSchema);

export default Tweets;

//schema for signup
const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    //similary we can add may field according to our requirement
})

const Users = mongoose.model("Users", tweetSchema);

export default Users;