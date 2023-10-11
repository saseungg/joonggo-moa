import { ReactNode } from 'react';

import * as S from './style';
import logo from '@assets/logo.png';
import background from '@assets/background.png';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Layout>
      <S.DesktopView>
        <S.Background src={background} />
      </S.DesktopView>
      <S.TitleLayout>
        <S.Logo src={logo} />
        <S.TitleBox>
          <S.Title>
            우리 동네
            <br />
            중고 거래 마켓
          </S.Title>
          <S.Description>
            다양한 중고 물품들을
            <br />
            중고모아에서 만나보세요!
          </S.Description>
        </S.TitleBox>
      </S.TitleLayout>
      <S.MobileView>
        <div id="modal-root"></div>
        {children}
      </S.MobileView>
    </S.Layout>
  );
};

export default Layout;
