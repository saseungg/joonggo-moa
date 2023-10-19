import { ICON_NAME, REQUEST_URL } from '@constants/index';

import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';

import Icon from '@components/common/Icon';
import { Category } from '@pages/NewProduct';
import * as S from './style';

interface CategoriesData {
  categories: Category[];
}

interface TitleInputProps {
  title: string;
  category: Category;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoryToggleClick: () => void;
  onCategorySelectClick: (category: Category) => void;
}

const TitleInput = ({
  title,
  category,
  onChange,
  onCategoryToggleClick,
  onCategorySelectClick,
}: TitleInputProps) => {
  const token = localStorage.getItem('Token');
  const options: RequestInit = {
    method: REQUEST_METHOD.GET,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  };

  const { responseState, data } = useFetch<CategoriesData>({
    url: `${REQUEST_URL.CATEGORY_RECOMMENDS}?title=''`, //todo: title부분에 값 넣어줘야함
    options,
  });

  return (
    <>
      <S.TitleInputLayout>
        <S.TitleInput placeholder="글 제목" onChange={onChange}></S.TitleInput>
        <S.CategoryLayout>
          <S.CategoryList>
            {!data?.categories.some((item) => item.id === category.id) && category.id !== 0 && (
              <S.CategoryItem className="active">{category.name}</S.CategoryItem>
            )}
            {responseState === 'SUCCESS' &&
              data?.categories.map(({ id, name }) => (
                <S.CategoryItem
                  key={id}
                  className={category.id === id ? 'active' : ''}
                  onClick={() => onCategorySelectClick({ id, name })}
                >
                  {name}
                </S.CategoryItem>
              ))}
          </S.CategoryList>
          <button onClick={onCategoryToggleClick}>
            <Icon name={ICON_NAME.CHEVRON_RIGHT} />
          </button>
        </S.CategoryLayout>
      </S.TitleInputLayout>
    </>
  );
};

export default TitleInput;
