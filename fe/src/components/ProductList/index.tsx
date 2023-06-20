import { useState, useEffect } from 'react';

import useFetch from '@hooks/useFetch';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

import { RESPONSE_STATE, REQUEST_METHOD } from '@constants/index';

import ProductListItem, { ProductListItemProps } from '@components/ProductListItem';
import * as S from './style';

interface Data {
  posts: { content: ProductListItemProps[]; last: boolean };
}

const ProductList = () => {
  const [pageNum, setPageNum] = useState(0);
  const [postList, setPostList] = useState<ProductListItemProps[]>([]);

  const { fetchData, responseState, data } = useFetch<Data>({
    url: `http://13.124.150.120:8080/posts?page=${pageNum}&size=10`,
    method: REQUEST_METHOD.GET,
  });

  const intersectHandler: IntersectionObserverCallback = ([entry]) => {
    if (!entry.isIntersecting) return;

    if (responseState === RESPONSE_STATE.SUCCESS && !data?.posts.last) {
      setPageNum((previousPageNum) => previousPageNum + 1);
    }
  };

  const { setTarget } = useIntersectionObserver({ intersectHandler });

  useEffect(() => {
    if (pageNum > 0) fetchData();
  }, [pageNum]);

  useEffect(() => {
    if (responseState !== RESPONSE_STATE.SUCCESS || !data) return;

    setPostList((previous) => [...previous, ...data.posts.content]);
  }, [responseState, data]);

  return (
    <S.ProductList>
      {responseState === RESPONSE_STATE.SUCCESS && data && (
        <>
          {postList.map((item) => (
            <ProductListItem key={item.id} {...item} />
          ))}
          {!data.posts.last && <S.Target ref={setTarget}></S.Target>}
        </>
      )}

      {responseState === RESPONSE_STATE.LOADING && (
        <>
          {postList.length > 0 ? (
            <>
              {postList.map((item) => (
                <ProductListItem key={item.id} {...item} />
              ))}
              <div>로딩 중 ~</div>
            </>
          ) : (
            <h1>Loading</h1>
          )}
        </>
      )}

      {responseState === RESPONSE_STATE.ERROR && <h1>Error</h1>}
    </S.ProductList>
  );
};

export default ProductList;
