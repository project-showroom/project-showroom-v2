import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useIfBiggerThan = ({
  size = 'md',
}: {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(size));
};
