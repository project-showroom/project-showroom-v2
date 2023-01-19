import { Schema, model, Document, models } from 'mongoose';

type ProfileInfoType = {
  userId: string;
  userEmail: string;
  defaultUserName: string;
  displayName: string;
};
interface IProfile extends Document {
  userName: string;
  myDetails: string;
  giveNameToButton: string;
  addLinkToYourDetails: string;
  profileTitle: string;
  userInfo: ProfileInfoType;
  createdAt: Date;
}

const ProfilesSchema: Schema = new Schema<IProfile>({
  userName: {
    type: String,
  },
  myDetails: {
    type: String,
  },
  giveNameToButton: {
    type: String,
  },
  addLinkToYourDetails: {
    type: String,
  },
  profileTitle: {
    type: String,
  },
  userInfo: {
    userId: String,
    userEmail: String,
    defaultUserName: String,
    displayName: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default models.Profiles || model<IProfile>('Profiles', ProfilesSchema);
