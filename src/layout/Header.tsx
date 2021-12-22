import styled from 'styled-components';
import Dropdown from '../components/Dropdown';
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

const Button = styled('button')`
    padding: 0.4em 2em 0.4em 1em;
    font-weight: 500;
    font-size: 1.3rem;
    color: ${props => props.theme.primaryColor};
    background: ${props => props.theme.secondaryColor};
    min-width: 200px;
`

export function Header() {
    const dispatch = useAppDispatch();
    const { theme } = useAppSelector((state) => state.UI);

    const handleToggleTheme = () => {
        if (theme.id === 'defaultTheme') {
            dispatch(toggleTheme(themes['darkTheme']));
        } else {
            dispatch(toggleTheme(themes['defaultTheme']));
        }
    };

    return (
        <HeaderWrapper>
            <Button
                onClick={() => handleToggleTheme()}>
                Toggle Theme
            </Button>
            <Dropdown />
        </HeaderWrapper>
    );
}
