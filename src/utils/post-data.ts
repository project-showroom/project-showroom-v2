import { IAddProjectFormValues } from '../types/element-types/form-elements-types';

export default async function postData(
  url: string,
  values: IAddProjectFormValues,
) {
  await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
}
