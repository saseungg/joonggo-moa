import Spinner from '@components/common/Spinner';
import * as S from './style';

interface LoadingProps {
  text: string;
}

const Loading = ({ text }: LoadingProps) => {
  return (
    <S.Loading>
      <Spinner />
      <S.LoadingText>{text}</S.LoadingText>
    </S.Loading>
  );
};

export default Loading;
