import * as icons from '@icons-pack/react-simple-icons';
// We don't need to use this file anymore, but I'm keeping it here for reference

const techName = Object.keys(icons);

const allTechs = techName.map((tech) => {
  const usingSplit = tech.split('');
  const removedSi = usingSplit.splice(2, usingSplit.length).join('');
  return removedSi;
});

export { allTechs };
