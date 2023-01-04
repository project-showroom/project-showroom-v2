import Container from '@mui/material/Container';

import { IAddProjectFormValues } from '../../types/element-types/form-elements-types/';
import { CardSelf } from './components/index';
import { CardPagination } from './index';

const COMPONENT_NAME = 'CardFeature';
const CardFeature = () => {
  const cardArray: IAddProjectFormValues[] = [
    {
      userName: 'Ercan Akalar',
      projectTitle: 'Project 1',
      thumbnailUrl: 'https://i.ibb.co/TTcxYkW/dev-Connector.png',
      description: 'Description 1',
      skillTags: [
        'React 1',
        'TypeScript 1',
        'Material UI 1',
        'React 1',
        'TypeScript 1',
        'Material UI 1',
      ],
      leftButtonTitle: 'View Online 1',
      leftButtonUrl: 'Left Button Url 1',
      rightButtonTitle: 'View Source Code 1',
      rightButtonUrl: 'Right Button Url 1',
    },
    {
      userName: 'Ercan Akalar',
      projectTitle: 'Project 2',
      thumbnailUrl: 'https://i.ibb.co/X89HCp3/showroom.png',
      description: 'Description 2',
      skillTags: ['React 2', 'TypeScript 2', 'Material UI 2'],
      leftButtonTitle: 'View Online 2',
      leftButtonUrl: 'Left Button Url 2',
      rightButtonTitle: 'View Source Code 2',
      rightButtonUrl: 'Right Button Url 2',
    },
    {
      userName: 'Ercan Akalar',
      projectTitle: 'Project 3',
      thumbnailUrl: 'https://i.ibb.co/X89HCp3/showroom.png',
      description: 'Description 3',
      skillTags: ['React 3', 'TypeScript 3', 'Material UI 3'],
      leftButtonTitle: 'View Online 3',
      leftButtonUrl: 'Left Button Url 3',
      rightButtonTitle: 'View Source Code 3',
      rightButtonUrl: 'Right Button Url 3',
    },
    {
      userName: 'Ercan Akalar',
      projectTitle: 'Project 4',
      thumbnailUrl: 'https://i.ibb.co/TTcxYkW/dev-Connector.png',
      description: 'Description 4',
      skillTags: ['React 4', 'TypeScript 4', 'Material UI 4'],
      leftButtonTitle: 'View Online 4',
      leftButtonUrl: 'Left Button Url 4',
      rightButtonTitle: 'View Source Code 4',
      rightButtonUrl: 'Right Button Url 4',
    },
    {
      userName: 'Ercan Akalar',
      projectTitle: 'Project 5',
      thumbnailUrl: 'https://i.ibb.co/X89HCp3/showroom.png',
      description: 'Description 5',
      skillTags: ['React 5', 'TypeScript 5', 'Material UI 5'],
      leftButtonTitle: 'View Online 5',
      leftButtonUrl: 'Left Button Url 5',
      rightButtonTitle: 'View Source Code 5',
      rightButtonUrl: 'Right Button Url 5',
    },
    {
      userName: 'Ercan Akalar',
      projectTitle: 'Project 6',
      thumbnailUrl: 'https://i.ibb.co/TTcxYkW/dev-Connector.png',
      description: 'Description 6',
      skillTags: ['React 6', 'TypeScript 6', 'Material UI 6'],
      leftButtonTitle: 'View Online 6',
      leftButtonUrl: 'Left Button Url 6',
      rightButtonTitle: 'View Source Code 6',
      rightButtonUrl: 'Right Button Url 6',
    },
    // {
    //   userName: 'Ercan Akalar',
    //   projectTitle: 'Project 7',
    //   thumbnailUrl: 'Thumbnail Url 7',
    //   description: 'Description 7',
    //   skillTags: ['React 7', 'TypeScript 7', 'Material UI 7'],
    //   leftButtonTitle: 'View Online 7',
    //   leftButtonUrl: 'Left Button Url 7',
    //   rightButtonTitle: 'View Source Code 7',
    //   rightButtonUrl: 'Right Button Url 7',
    // },
  ];

  return (
    <Container maxWidth="md" className={COMPONENT_NAME}>
      <CardPagination cardLength={cardArray.length} />
      <CardSelf userCards={cardArray} />
      <CardPagination cardLength={cardArray.length} />
    </Container>
  );
};

CardFeature.displayName = COMPONENT_NAME;

export { CardFeature };
