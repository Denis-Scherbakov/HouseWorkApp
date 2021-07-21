import styles from "styled-components";
import { useAppDispatch } from "../../../app/hooks";
import { toggleMenu } from "../houseWorkSlice";
import { completeTask } from "../houseWorkSlice";

const CompleteTasKMenuWrapper = styles.div`
  position: absolute;
  top: 0px;
  width: 240px;
  height: 240px;
  border-radius: 8px;
  background: #FFE8DB;
  `;

const StyledTaskP = styles.p`
  display: block;
  width: 200px;
  height: 69px;
  margin: 20px;
  font-size: 18px;
  text-align: center;
  overflow-wrap: break-word;
  `;

const ButtonWrapper = styles.div`
  display: flex;
  `;

const StyledButtonDeclineText = styles.div`
    position: absolute;
    top: 60px;
    right: -15px;
    font-size: 12px;
    width: 90px;
  `;

const StyledDeclineButton = styles.button`
  position: relative;
  margin-top: 40px;
  margin-left: 37px;
  width: 60px;
  height: 60px;
  background: transparent;
  border: none;
  cursor: pointer;
  :hover  {
    border: 1px dashed #FF8933;
    border-radius: 100%;
  }
  &:hover ${StyledButtonDeclineText} {
    color: #FF8933;
  }
`;

const StyledDeclineSvg = styles.svg`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const SvgDeclineOnHover = styles.g`
  ${StyledDeclineButton}:hover & {
    fill: #FF8933;
  }
`;

const StyledButtonCompleteText = styles.div`
  position: absolute;
  top: 60px;
  right: -15px;
  font-size: 12px;
  width: 90px;
  color: black;
`;

const StyledCompleteButton = styles.button`
  position: relative;
  margin-top: 40px;
  margin-left: 52px;
  width: 60px;
  height: 60px;
  background: transparent;
  border: none;
  cursor: pointer;
  :hover  {
    border: 1px dashed #FF8933;
    border-radius: 100%;
  }
  &:hover ${StyledButtonCompleteText} {
    color: #FF8933;
  }
  `;

const SvgCompleteOnHover = styles.g`
    ${StyledCompleteButton}:hover & {
      fill: #FF8933;
    }
  `;

const StyledCompleteSvg = styles.svg`
  position: absolute;
  top: 10px;
  right: 10px;
  `;

interface CompleteTaskMenuProps {
  title: string;
  value: string;
}

export const CompleteTaskMenu = ({ title, value }: CompleteTaskMenuProps) => {
  const dispatch = useAppDispatch();

  const toggleCompleteTaskMenu = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    dispatch(toggleMenu(event.currentTarget.value));
  };

  const setCompleteTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(completeTask(event.currentTarget.value));
  };

  return (
    <CompleteTasKMenuWrapper>
      <StyledTaskP>Did you {title}?</StyledTaskP>
      <ButtonWrapper>
        <StyledDeclineButton value={value} onClick={toggleCompleteTaskMenu}>
          <StyledDeclineSvg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="36"
            height="36"
            viewBox="0 0 172 172"
          >
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <SvgDeclineOnHover fill="#555555">
              <path d="M23.66763,33.80482l10.13502,-10.13537l114.52973,114.52573l-10.13502,10.13537z"></path>
              <path d="M23.66945,138.19735l114.52573,-114.52973l10.13537,10.13502l-114.52573,114.52973z"></path>
            </SvgDeclineOnHover>
          </StyledDeclineSvg>
          <StyledButtonDeclineText>No, maybe later</StyledButtonDeclineText>
        </StyledDeclineButton>
        <StyledCompleteButton value={value} onClick={setCompleteTask}>
          <StyledCompleteSvg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="36"
            height="36"
            viewBox="0 0 172 172"
          >
            <SvgCompleteOnHover fill="#555555">
              <path d="M145.43294,37.93294l-80.93294,80.93295l-30.76628,-30.76628l-10.13411,10.13411l40.90039,40.90039l91.06706,-91.06705z"></path>
            </SvgCompleteOnHover>
          </StyledCompleteSvg>
          <StyledButtonCompleteText>Yes, i did!</StyledButtonCompleteText>
        </StyledCompleteButton>
      </ButtonWrapper>
    </CompleteTasKMenuWrapper>
  );
};
