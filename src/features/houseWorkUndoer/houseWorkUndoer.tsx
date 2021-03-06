import { Switch, Route, Link, Redirect } from "react-router-dom";
import { TodaysHousework } from "./components/todaysHousework";
import { AccountsList } from "./components/accountsList";
import { LoginScreen } from "./components/logInScreen";
import styles from "styled-components";

const MainWrapper = styles.div`
  display: flex;
`;

const StyledHouseWorkList = styles.ul`
  display: flex;
  list-style-type: none;
  margin-left: 186px;
  margin-top: 96px;
`;

const StyledHouseWorkItem = styles.li`
  margin-left: -25px;
`;

const StyledTodayHouseWorkLink = styles(Link)`
text-decoration: none;
`;

const StyledWaves = styles.svg`
    position: absolute;
    z-index: -2;
    top: 620px;
    width: 376px;
    height: 316px;
    opacity: 0.5;
`;

const StyledTriangle = styles.svg`
    position: absolute;
    top: 630px;
    width: 165px;
    height: 307px;
    opacity: 0.5;
`;

export const HouseWorkUndoer = () => {
  return (
    <MainWrapper>
      <Route exact path="/">
        <Redirect to="/Login" />
      </Route>
      <Switch>
        <Route path="/Login">
          <LoginScreen />
        </Route>
      </Switch>
      <Switch>
        <Route path={["/Main", "/todaysHouseWork"]}>
          <AccountsList />
          <StyledHouseWorkList>
            <StyledHouseWorkItem>
              <StyledTodayHouseWorkLink to="/todaysHouseWork">
                Todays housework
              </StyledTodayHouseWorkLink>
              <Switch>
                <Route path="/todaysHouseWork">
                  <TodaysHousework />
                </Route>
              </Switch>
            </StyledHouseWorkItem>
            <StyledHouseWorkItem>History</StyledHouseWorkItem>
          </StyledHouseWorkList>
          <StyledWaves>
            <path
              d="M-45.8934 0.284717C-45.8934 0.284717 -20.6929 41.7919 11.1013 50.7149C42.8956 59.6378 78.0393 92.5125 85.4559 116.505C92.8724 140.498 121.148 160.139 151.753 175.167C182.359 190.195 206.438 207.102 224.515 239.548C242.593 271.995 375.277 372.945 375.277 372.945L228.402 543.335L-192.768 170.674L-45.8934 0.284717Z"
              fill="#FFAC88"
            />
          </StyledWaves>
          <StyledTriangle>
            <path
              d="M-207.849 0.766602L164.061 329.84L-4.09075 524.912L-376 195.839L-207.849 0.766602Z"
              fill="#FFAC88"
            />
          </StyledTriangle>
        </Route>
      </Switch>
    </MainWrapper>
  );
};
