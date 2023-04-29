import { useId } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useCopyToClipboard } from 'usehooks-ts';

import { CopyIconButton } from './copy-icon-button';
const COMPONENT_NAME = 'UserProfileUrl';
const UserProfileUrl = ({
  className = '',
  ...rest
}: {
  className?: string;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const router = useRouter();
  const profileUrl = process.env.NEXT_PUBLIC_URL + router.asPath;
  const [, copy] = useCopyToClipboard();
  const onCopyProfileUrl = () => {
    copy(profileUrl);
    toast(
      'Copied to clipboard. Now you can share your profile url with others! Try to paste it in the browser address bar.',
      {
        type: 'success',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        pauseOnFocusLoss: false,
      },
    );
  };

  return (
    <div
      id={id}
      {...rest}
      className={classNames(
        className,
        COMPONENT_NAME,
        'flex justify-center items-center gap-2',
      )}
    >
      {profileUrl}
      <CopyIconButton
        onClick={onCopyProfileUrl}
        title="Copy profile URL in order to share it with others"
      />
    </div>
  );
};

UserProfileUrl.displayName = COMPONENT_NAME;

export { UserProfileUrl };
