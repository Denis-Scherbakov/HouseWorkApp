import styles from "styled-components";
import Lilly from "../images/Lilly.png";
import Jack from "../images/Jack.png";
import Mary from "../images/Mary.png";

const StyledAccountsList = styles.ul`
  display: flex;
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const StyledAccountButton = styles.button`
  position: relative;
  height: 166px;
  width: 171px;
  margin-left: 90px;
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;

const StyledAccountsListItem = styles.li`
  position: relative;
  list-style: none;
`;

const StyledAccounImage = styles.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 166px;
  width: 171px;
  border-radius: 100%;
  border: none;
`;

const StyledAccountName = styles.p`
  position: absolute;
  top: 150px;
  font-size: 24px;
  margin-left: 150px;
`;

const StyledAccountAge = styles.p`
  position: absolute;
  top: 200px;
  left: 136px;
  font-size: 14px;
`;

export const LoginScreen = () => {
  return (
    <StyledAccountsList>
      <StyledAccountsListItem>
        <StyledAccountButton>
          <StyledAccounImage src={Lilly} alt="Lilly" />
        </StyledAccountButton>
        <StyledAccountName>Lily</StyledAccountName>
        <StyledAccountAge>11 years old</StyledAccountAge>
      </StyledAccountsListItem>
      <StyledAccountsListItem>
        <StyledAccountButton>
          <StyledAccounImage src={Jack} alt="Jack" />
        </StyledAccountButton>
        <StyledAccountName>Jack</StyledAccountName>
        <StyledAccountAge>54 years old</StyledAccountAge>
      </StyledAccountsListItem>
      <StyledAccountsListItem>
        <StyledAccountButton>
          <StyledAccounImage src={Mary} alt="Marie" />
        </StyledAccountButton>
        <StyledAccountName>Mary</StyledAccountName>
        <StyledAccountAge>10 years old</StyledAccountAge>
      </StyledAccountsListItem>
    </StyledAccountsList>
  );
};
