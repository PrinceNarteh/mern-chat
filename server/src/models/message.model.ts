import {Schema, model, Document, Model} from "mongoose";

interface IMessage {
  content: string;
  from: object;
  to: String;
  socketId: string;
  time: string;
  date: string;
}

interface IMessageDocument extends IMessage, Document {}
interface IMessageModel extends Model<IMessageDocument> {}

const messageSchema: Schema<IMessageDocument> = new Schema({
  content: {
    type: String,
    required: true,
  },
  from: {
    type: Object,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  socketId: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const User = model<IMessageDocument, IMessageModel>("Message", messageSchema);
export default User;
