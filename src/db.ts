import mongoose, {model, Schema} from 'mongoose';

mongoose.connect('mongodb+srv://akshattyagi1010:MxlWrDc31UQErA1O@second-brain.d2auj.mongodb.net/');


 const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: { type: String },
 });  

 export const UserModel = model('User', UserSchema);