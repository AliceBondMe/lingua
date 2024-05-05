import {
  GetStartedBtn,
  ImageContainer,
  MainHeader,
  TextBlock,
  Wrap,
} from "./HomePage.styled";
import happyStudent from "../assets/images/cartoon-study-laptop-1x.png";

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
          <GetStartedBtn type="button">Get started</GetStartedBtn>
        </TextBlock>
        <ImageContainer>
          <img src={happyStudent} alt="happy student with laptop" />
        </ImageContainer>
      </Wrap>
    </>
  );
};

export default HomePage;
