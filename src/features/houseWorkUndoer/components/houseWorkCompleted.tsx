import styles from "styled-components";

const HouseWorkCopmletedWrapper = styles.div`
  position: absolute;
  top: 0px;
  width: 240px;
  height: 240px;
  border-radius: 8px;
  background: #FFE8DB;
  `;

const StyledAcceptCompletedButton = styles.button`
  position: relative;
  margin-top: 20px;
  margin-left: 60px;
  width: 120px;
  height: 120px;
  background: transparent;
  cursor: pointer;
  border: 1px dashed #FF8933;
  border-radius: 100%;
`;

const StyledAcceptCompletedButtonText = styles.p`
    position: absolute;
    top: 120px;
    left: -40px;
    font-size: 18px;
    width: 200px;
    color: #FF8933;
`;

const StyledAcceptText = styles.p`
    margin-top: 50px;
    margin-left: 20px;
    font-weight: bold;
`;

interface HouseWorkCompletedProps {
  points: number;
}

export const HouseWorkCompleted = ({ points }: HouseWorkCompletedProps) => {
  return (
    <HouseWorkCopmletedWrapper>
      <StyledAcceptCompletedButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="70"
          height="70"
          viewBox="0 0 172 172"
        >
          <g fill="#FF8933">
            <path d="M145.43294,37.93294l-80.93294,80.93295l-30.76628,-30.76628l-10.13411,10.13411l40.90039,40.90039l91.06706,-91.06705z"></path>
          </g>
        </svg>
        <StyledAcceptCompletedButtonText>
          Well done!
        </StyledAcceptCompletedButtonText>
      </StyledAcceptCompletedButton>
      <StyledAcceptText>You earned {points} Help Coins!</StyledAcceptText>
    </HouseWorkCopmletedWrapper>
  );
};
