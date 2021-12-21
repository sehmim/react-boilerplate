import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/rtk';
import { toggleTheme } from '../slices/UI/UISlice';
import { themes } from '../util/themes';

export const HeaderWrapper = styled.div`
  height: 15vh;
  width: 100%;

  color: ${props => props.theme.primaryColor};
  border: 2px solid ${props => props.theme.primaryColor};
  background: ${props => props.theme.secondaryColor};
`

export function Header() {
    const dispatch = useAppDispatch();
    const { theme } = useAppSelector((state) => state.UI);

    console.log('Current Theme', theme);

    const handleToggleTheme = () => {
        if (theme.id === 'defaultTheme') {
            dispatch(toggleTheme(themes['darkTheme']));
        } else {
            dispatch(toggleTheme(themes['defaultTheme']));
        }
    };

    return (
        <HeaderWrapper>
            <button
                onClick={() => handleToggleTheme()}>
                Toggle Theme
            </button>
        </HeaderWrapper>
    );
}
