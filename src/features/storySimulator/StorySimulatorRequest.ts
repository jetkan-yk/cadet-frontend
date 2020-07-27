import Constants from 'src/commons/utils/Constants';

import SourceAcademyGame from '../game/SourceAcademyGame';

const sendRequest = (route: string) => async (
  requestPath: string,
  method: string,
  headerConfig: object = {},
  requestDetails: object = {}
) => {
  try {
    const accessToken = SourceAcademyGame.getInstance().getAccountInfo().accessToken || '';

    const headers = createHeaders(accessToken);
    Object.entries(headerConfig).forEach(([key, value]: string[]) => {
      headers.append(key, value);
    });

    const config = {
      method,
      headers,
      ...requestDetails
    };

    return fetch(Constants.backendUrl + `/v1/${route}/` + requestPath, config);
  } finally {
  }
};

export const sendAssetRequest = sendRequest('assets');
export const sendStoryRequest = sendRequest('stories');

export function createHeaders(accessToken: string): Headers {
  const headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('Authorization', `Bearer ${accessToken}`);
  return headers;
}
