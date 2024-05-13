import {
  GetStartedLink,
  ImageContainer,
  MainHeader,
  NumericData,
  StatItem,
  StatList,
  Text,
  TextBlock,
  Wrap,
} from "./HomePage.styled";
import happyStudent from "../../assets/images/cartoon-study-laptop-1x.png";

const HomePage = () => {
  return (
    <>
      <Wrap>
        <TextBlock>
          <MainHeader>
            Unlock your potential with the best{" "}
            <div>
              <span>language</span>
            </div>{" "}
            tutors
          </MainHeader>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <GetStartedLink to="teachers">Get started</GetStartedLink>
        </TextBlock>
        <ImageContainer>
          <img src={happyStudent} alt="happy student with laptop" />
        </ImageContainer>
      </Wrap>
      <StatList>
        <StatItem>
          <NumericData>32,000 +</NumericData>
          <Text>Experienced tutors</Text>
        </StatItem>
        <StatItem>
          <NumericData>300,000 +</NumericData>
          <Text>5-star tutor reviews</Text>
        </StatItem>
        <StatItem>
          <NumericData>120 +</NumericData>
          <Text>Subjects taught</Text>
        </StatItem>
        <StatItem>
          <NumericData>200 +</NumericData>
          <Text>Tutor nationalities</Text>
        </StatItem>
      </StatList>
    </>
  );
};

export default HomePage;
