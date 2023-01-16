import { Document, Schema, Model, Types, model, models } from 'mongoose';

type UserInfoType = {
  userId?: string;
  defaultUserName: string;
  displayName: string;
};

interface IProject extends Document {
  projectTitle: string;
  thumbnailUrl: string;
  description: string;
  skillTags: Types.Array<string>;
  leftButtonTitle: string;
  leftButtonUrl: string;
  rightButtonTitle: string;
  rightButtonUrl: string;
  userInfo: UserInfoType;
  createdAt: Date;
}

const ProjectSchema: Schema = new Schema<IProject, Model<IProject>>({
  projectTitle: {
    type: String,
    required: [true, 'Please provide a project title.'],
  },
  thumbnailUrl: {
    type: String,
  },
  description: {
    type: String,
  },
  skillTags: [String],
  leftButtonTitle: {
    type: String,
  },
  leftButtonUrl: {
    type: String,
  },
  rightButtonTitle: {
    type: String,
  },
  rightButtonUrl: {
    type: String,
  },
  userInfo: {
    userId: {
      type: String,
    },
    defaultUserName: {
      type: String,
    },
    displayName: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default models.Projects || model<IProject>('Projects', ProjectSchema);
