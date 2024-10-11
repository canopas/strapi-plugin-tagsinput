import { Main } from '@strapi/design-system';
import { useIntl } from 'react-intl';
import pluginId from "../pluginId";

const HomePage = () => {
  const { formatMessage } = useIntl();

  return (
    <Main>
      <h1>Welcome to {formatMessage({ id: pluginId })}</h1>
    </Main>
  );
};

export { HomePage };
