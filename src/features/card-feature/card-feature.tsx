import React, { useState } from 'react';

import { IAddProjectFormValues } from '../../types/element-types/form-elements-types/';
import { ITEMS_PER_PAGE } from '../../utils/items-per-page';
import { paginationFunction } from '../../utils/pagination-function';
import { CardSelf } from './components/index';
import { CardPagination } from './index';

const COMPONENT_NAME = 'CardFeature';
const CardFeature = () => {
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState<IAddProjectFormValues[]>(
    cardArray.slice(0, ITEMS_PER_PAGE),
  );

  const cardLength = cardArray.length;
  const page_size = Math.ceil(cardLength / ITEMS_PER_PAGE);

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    const { pageArray } = paginationFunction(cardArray, value, ITEMS_PER_PAGE);
    setPage(value);
    setCards(pageArray);
  };

  return (
    <>
      <CardPagination
        page_size={page_size}
        onPageChange={onPageChange}
        page={page}
      />
      <CardSelf userCards={cards} />
      <CardPagination
        page_size={page_size}
        onPageChange={onPageChange}
        page={page}
      />
    </>
  );
};

CardFeature.displayName = COMPONENT_NAME;

export { CardFeature };
const cardArray: IAddProjectFormValues[] = [
  {
    userName: 'Ercan Akalar',
    projectTitle: 'Project 1',
    thumbnailUrl: 'https://i.ibb.co/TTcxYkW/dev-Connector.png',
    description:
      'Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1',
    skillTags: [
      'React 1',
      'TypeScript 1',
      'Material UI 1',
      'React 1',
      'TypeScript 1',
      'Material UI 1',
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
    creatorId: 'string[]',
    creatorEmail: 'string[]',
    creatorDisplayName: 'string[]',
    creatorFirstName: 'string[]',
    creatorLastName: 'string[]',
    creatorDefaultUserName: 'string[]',
  },
  {
    userName: 'Ercan Akalar',
    projectTitle: 'Project 2',
    thumbnailUrl: 'https://i.ibb.co/X89HCp3/showroom.png',
    description:
      'Description 2Description 2Description 2Description 2Description 2Description 2Description 2Description 2Description 2Description 2Description 2Description 2',
    skillTags: [
      'React 2',
      'TypeScript 2',
      'Material UI 2',
      'React 2',
      'TypeScript 2',
      'Material UI 2',
    ],
    leftButtonTitle: 'View Online 2',
    leftButtonUrl: 'Left Button Url 2',
    rightButtonTitle: 'View Source Code 2',
    rightButtonUrl: 'Right Button Url 2',
    creatorId: 'string[]',
    creatorEmail: 'string[]',
    creatorDisplayName: 'string[]',
    creatorFirstName: 'string[]',
    creatorLastName: 'string[]',
    creatorDefaultUserName: 'string[]',
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
    creatorId: 'string[]',
    creatorEmail: 'string[]',
    creatorDisplayName: 'string[]',
    creatorFirstName: 'string[]',
    creatorLastName: 'string[]',
    creatorDefaultUserName: 'string[]',
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
    creatorId: 'string[]',
    creatorEmail: 'string[]',
    creatorDisplayName: 'string[]',
    creatorFirstName: 'string[]',
    creatorLastName: 'string[]',
    creatorDefaultUserName: 'string[]',
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
    creatorId: 'string[]',
    creatorEmail: 'string[]',
    creatorDisplayName: 'string[]',
    creatorFirstName: 'string[]',
    creatorLastName: 'string[]',
    creatorDefaultUserName: 'string[]',
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
    creatorId: 'string[]',
    creatorEmail: 'string[]',
    creatorDisplayName: 'string[]',
    creatorFirstName: 'string[]',
    creatorLastName: 'string[]',
    creatorDefaultUserName: 'string[]',
  },
  {
    userName: 'Ercan Akalar',
    projectTitle: 'Project 7',
    thumbnailUrl: 'https://i.ibb.co/X89HCp3/showroom.png',
    description: 'Description 7',
    skillTags: ['React 7', 'TypeScript 7', 'Material UI 7'],
    leftButtonTitle: 'View Online 7',
    leftButtonUrl: 'Left Button Url 7',
    rightButtonTitle: 'View Source Code 7',
    rightButtonUrl: 'Right Button Url 7',
    creatorId: 'string[]',
    creatorEmail: 'string[]',
    creatorDisplayName: 'string[]',
    creatorFirstName: 'string[]',
    creatorLastName: 'string[]',
    creatorDefaultUserName: 'string[]',
  },
  {
    userName: 'Ercan Akalar',
    projectTitle: 'Project 8',
    thumbnailUrl: 'https://i.ibb.co/X89HCp3/showroom.png',
    description: 'Description 8',
    skillTags: ['React 8', 'TypeScript 8', 'Material UI 8'],
    leftButtonTitle: 'View Online 8',
    leftButtonUrl: 'Left Button Url 8',
    rightButtonTitle: 'View Source Code 8',
    rightButtonUrl: 'Right Button Url 8',
    creatorId: 'string[]',
    creatorEmail: 'string[]',
    creatorDisplayName: 'string[]',
    creatorFirstName: 'string[]',
    creatorLastName: 'string[]',
    creatorDefaultUserName: 'string[]',
  },
  {
    userName: 'Ercan Akalar',
    projectTitle: 'Project 9',
    thumbnailUrl: 'https://i.ibb.co/TTcxYkW/dev-Connector.png',
    description: 'Description 9',
    skillTags: ['React 9', 'TypeScript 9', 'Material UI 9'],
    leftButtonTitle: 'View Online 9',
    leftButtonUrl: 'Left Button Url 9',
    rightButtonTitle: 'View Source Code 9',
    rightButtonUrl: 'Right Button Url 9',
    creatorId: 'string[]',
    creatorEmail: 'string[]',
    creatorDisplayName: 'string[]',
    creatorFirstName: 'string[]',
    creatorLastName: 'string[]',
    creatorDefaultUserName: 'string[]',
  },
  {
    userName: 'Ercan Akalar',
    projectTitle: 'Project 10',
    thumbnailUrl: 'https://i.ibb.co/X89HCp3/showroom.png',
    description: 'Description 10',
    skillTags: ['React 10', 'TypeScript 10', 'Material UI 10'],
    leftButtonTitle: 'View Online 10',
    leftButtonUrl: 'Left Button Url 10',
    rightButtonTitle: 'View Source Code 10',
    rightButtonUrl: 'Right Button Url 10',
    creatorId: 'string[]',
    creatorEmail: 'string[]',
    creatorDisplayName: 'string[]',
    creatorFirstName: 'string[]',
    creatorLastName: 'string[]',
    creatorDefaultUserName: 'string[]',
  },
  {
    userName: 'Ercan Akalar',
    projectTitle: 'Project 11',
    thumbnailUrl: 'https://i.ibb.co/TTcxYkW/dev-Connector.png',
    description: 'Description 11',
    skillTags: ['React 11', 'TypeScript 11', 'Material UI 11'],
    leftButtonTitle: 'View Online 11',
    leftButtonUrl: 'Left Button Url 11',
    rightButtonTitle: 'View Source Code 11',
    rightButtonUrl: 'Right Button Url 11',
    creatorId: 'string[]',
    creatorEmail: 'string[]',
    creatorDisplayName: 'string[]',
    creatorFirstName: 'string[]',
    creatorLastName: 'string[]',
    creatorDefaultUserName: 'string[]',
  },
];
