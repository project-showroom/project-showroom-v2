import { Document, Schema, Model, Types, model } from 'mongoose';

interface IProject extends Document {
  projectTitle: string;
  thumbnailUrl: string;
  description: string;
  skillTags: Types.Array<string>;
  leftButtonTitle: string;
  leftButtonUrl: string;
  rightButtonTitle: string;
  rightButtonUrl: string;
  creatorEmail: string;
  creatorId: string;
  creatorDisplayName: string;
  creatorFirstName: string;
  creatorLastName: string;
  creatorDefaultUserName: string;
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
  creatorEmail: {
    type: String,
  },
  creatorId: {
    type: String,
  },
  creatorDisplayName: {
    type: String,
  },
  creatorFirstName: {
    type: String,
  },
  creatorLastName: {
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

export default model('Projects', ProjectSchema);
