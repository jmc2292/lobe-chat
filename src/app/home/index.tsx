'use client';

import { useTranslation } from 'react-i18next';

import FullscreenLoading from '@/components/FullscreenLoading';

const Loading = () => {
  const { t } = useTranslation();

  return <FullscreenLoading title={t('appInitializing', { ns: 'common' })} />;
};

export default Loading;
