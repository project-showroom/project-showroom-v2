import { Schema, model, Document, models } from 'mongoose';

interface IProfile extends Document {
  username: string;
  myDetails: string;
  giveNameToButton: string;
  addOneUrl: string;
  title: string;
  creatorId: string;
  creatorEmail: string;
  creatorDisplayName: string;
  creatorDefaultUserName: string;
  createdAt: Date;
}

const ProfilesSchema: Schema = new Schema<IProfile>({
  username: {
    type: String,
  },
  myDetails: {
    type: String,
  },
  giveNameToButton: {
    type: String,
  },
  addOneUrl: {
    type: String,
  },
  title: {
    type: String,
  },
  creatorId: {
    type: String,
  },
  creatorEmail: {
    type: String,
  },
  creatorDisplayName: {
    type: String,
  },
  creatorDefaultUserName: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default models.Profiles || model<IProfile>('Profiles', ProfilesSchema);
