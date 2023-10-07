import { useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { ICON_NAME, PATH, REQUEST_URL } from '@constants/index';

import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';

import Icon from '@components/common/Icon';
import ProductList from '@components/ProductList';
import * as S from './style';

interface Region {
  id: number;
  name: string;
}

interface RegionsData {
  regions: Region[];
}

const CategoryDetail = () => {
  const [searchParams] = useSearchParams();
  const idParams = searchParams.get('id');
  const nameParams = searchParams.get('name');
  const listRef = useRef<HTMLDivElement | null>(null);

  const token = localStorage.getItem('Token');
  const options: RequestInit = {
    method: REQUEST_METHOD.GET,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  };

  const { data: regionsData } = useFetch<RegionsData>({
    url: REQUEST_URL.USER_REGIONS,
    options,
  });

  const goToTopHandler = () => {
    listRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <S.Header>
        <Link to={PATH.CATEGORY}>
          <S.BackButton>
            <Icon name={ICON_NAME.CHEVRON_LEFT} />
          </S.BackButton>
        </Link>
        <S.HeaderTitle>{nameParams}</S.HeaderTitle>
        <S.EmptyTag></S.EmptyTag>
      </S.Header>

      <S.ProductListLayout ref={listRef}>
        {regionsData && <ProductList regionId={regionsData?.regions[0].id} categoryId={Number(idParams)} />}
      </S.ProductListLayout>

      <S.GoToTopButton onClick={goToTopHandler}>
        <Icon name={ICON_NAME.ARROW_UP} />
      </S.GoToTopButton>
    </>
  );
};

export default CategoryDetail;
