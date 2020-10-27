import { mediaQueries } from "lib/screenSizes";
import styled from "styled-components";
import heroImagePng from "assets/images/hero-image.png";
import AtomImage from "components/AtomImage";
import { ReactComponent as ReactLogo } from "assets/icons/react.svg";
import { ReactComponent as JsLogo } from "assets/icons/js.svg";
import { ReactComponent as HtmlLogo } from "assets/icons/html.svg";
import Header from "components/common/Header";
import Button from "components/common/Button";
import Container from "components/common/Container";

const HeaderLink = styled.a`
  padding: 30px;
  color: white;
  display: inline-block;
`;

const CourseTitle = styled.h1`
  font-size: 72px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  color: white;

  @media ${mediaQueries.xs} {
    font-size: 48px;
  }

  @media ${mediaQueries.sm} {
    font-size: 48px;
    padding-right: 260px;
  }

  @media ${mediaQueries.md} {
    font-size: 72px;
  }

  @media ${mediaQueries.lg} {
    padding-right: 500px;
  }
`;

const CourseSubtitle = styled.h6`
  font-size: 27px;
  font-family: "Montserrat", sans-serif;
  color: white;
  letter-spacing: 0.05em;
  margin-top: 20px;

  @media ${mediaQueries.xl} {
    width: 50%;
  }
`;

const Banner = styled.div`
  position: relative;
  min-height: 580px;
  height: 100%;

  @media ${mediaQueries.sm} {
    padding: 50px 0;
  }
`;

const HeroImage = styled(AtomImage)`
  position: absolute;
  top: 50px;
  right: 0;
  height: calc(100vh - 120px - 100px);
  width: calc(100vh - 120px - 100px);
  max-width: 400px;
  max-height: 400px;

  @media ${mediaQueries.xs} {
    position: relative;
    top: 0;
    margin: 50px auto;
  }
`;

const SubscribeButton = styled(Button)`
  margin-top: 50px;
`;

const StagesContainer = styled.section`
  margin-top: 150px;
`;

const StagesTitle = styled.h2`
  ${({ theme }) => theme.fonts.mainFont(64, 800)};
  color: ${({ theme }) => theme.colors.textSecondaryColor};
`;

const StagesRow = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 50px;
  align-items: center;
  justify-content: center;

  @media ${mediaQueries.xs} {
    grid-template-columns: repeat(auto-fit, minmax(330px, 420px));
  }
`;

const StageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 0px 28px 100px 17px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  position: relative;
  min-height: 516px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const StageNumber = styled.span`
  ${({ theme }) => theme.fonts.monoFont(56, 700)};
  padding: 0 30px 14px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};
`;

const HighlightText = styled.span`
  color: ${({ theme, color }) => theme.colors[color]};
`;

const StyledHtmlLogo = props => {
  return <HtmlLogo width="100px" height="100px" {...props} />;
};

const StyledJsLogo = props => {
  return <JsLogo width="75px" height="75px" {...props} />;
};

const StyledReactLogo = props => {
  return <ReactLogo width="100px" height="100px" {...props} />;
};

const StageLogo = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -20%);
`;

const StageDescription = styled.span`
  ${({ theme }) => theme.fonts.mainFont(24, 600)};
  padding: 0 30px 60px;
  text-align: center;
`;

export default function IndexPageContent() {
  return (
    <>
      <Header>
        <HeaderLink href="#">Курс</HeaderLink>
        <HeaderLink href="#">Цены</HeaderLink>
        <HeaderLink href="#">Мастер классы</HeaderLink>
        <HeaderLink href="#">Контакты</HeaderLink>
      </Header>
      <Container as="main">
        <Banner>
          <CourseTitle>КУРС FRONT-END РАЗРАБОТКИ С&nbsp;НУЛЯ.</CourseTitle>
          <HeroImage
            src={heroImagePng}
            electrons={[StyledJsLogo, StyledReactLogo, StyledHtmlLogo]}
          />
          <CourseSubtitle>
            Научим делать сногшибательные сайты и зарабатывать много денег!*
          </CourseSubtitle>
          <SubscribeButton
            forwardedAs="a"
            target="_blank"
            href="https://t.me/hipstacodingbot"
          >
            Записаться
          </SubscribeButton>
        </Banner>
        <StagesContainer as="section">
          <StagesTitle>Этапы</StagesTitle>
          <StagesRow>
            <StageContainer>
              <StageLogo as={StyledHtmlLogo} />
              <StageNumber>01</StageNumber>
              <StageDescription>
                Верстаем с <HighlightText color="orange">HTML5</HighlightText> и{" "}
                <HighlightText color="orange">CSS3</HighlightText>
              </StageDescription>
            </StageContainer>
            <StageContainer>
              <StageLogo as={StyledJsLogo} />
              <StageNumber>02</StageNumber>

              <StageDescription>
                Учимся кодить на{" "}
                <HighlightText color="yellow">JavaScript</HighlightText>
              </StageDescription>
            </StageContainer>
            <StageContainer>
              <StageLogo as={StyledReactLogo} />
              <StageNumber>03</StageNumber>
              <StageDescription>
                Решаем сложные задачи легко с{" "}
                <HighlightText color="blue">React</HighlightText>
              </StageDescription>
            </StageContainer>
          </StagesRow>
        </StagesContainer>
      </Container>
    </>
  );
}
